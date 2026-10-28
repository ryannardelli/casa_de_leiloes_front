import { jsPDF } from "jspdf";
import type { Award } from "../models/Award";
import { formatCurrency } from "./formatCurrency";

export interface ReceiptPdfData {
  id: number;
  verificationCode: string;
  issuedAt: string;
  auctioneerId: number;
}

export function generateReceiptPdf(
  award: Award,
  receipt: ReceiptPdfData
): Blob {
  const pdf = new jsPDF({
    unit: "mm",
    format: "a4",
    compress: true,
  });

  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();
  const margin = 20;
  const contentWidth = pageWidth - margin * 2;

  const isAwarded = award.winnerId !== null && award.winnerId !== undefined;

  const formatDate = (date: string | null) => {
    if (!date) return "Não informada";
    return new Date(date).toLocaleString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const addHeader = () => {
    pdf.setFillColor(11, 43, 41);
    pdf.rect(0, 0, pageWidth, 45, "F");

    pdf.setTextColor(255, 255, 255);
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(20);
    pdf.text("ARREMATA", margin, 20);

    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(9);
    pdf.setTextColor(170, 195, 192);
    pdf.text("PLATAFORMA DE LEILÕES ONLINE", margin, 27);

    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(10);
    pdf.setTextColor(255, 255, 255);
    pdf.text("COMPROVANTE OFICIAL DE RESULTADO", pageWidth - margin, 24, {
      align: "right",
    });
  };

  const addFooter = () => {
    const totalPages = pdf.internal.pages.length - 1;
    for (let i = 1; i <= totalPages; i++) {
      pdf.setPage(i);
      pdf.setDrawColor(220, 225, 228);
      pdf.setLineWidth(0.3);
      pdf.line(margin, pageHeight - 16, pageWidth - margin, pageHeight - 16);

      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(8);
      pdf.setTextColor(120, 130, 140);
      pdf.text("Arremata - Sistema Oficial de Leilões", margin, pageHeight - 10);
      pdf.text(
        `Página ${i} de ${totalPages}`,
        pageWidth - margin,
        pageHeight - 10,
        { align: "right" }
      );
    }
  };

  addHeader();

  let y = 62;

  pdf.setTextColor(15, 30, 35);
  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(16);
  pdf.text("Comprovante de Arremate", margin, y);

  const statusText = isAwarded ? "ARREMATADO" : "ENCERRADO SEM LANCES";
  pdf.setFontSize(9);
  pdf.setFont("helvetica", "bold");
  
  const statusWidth = pdf.getTextWidth(statusText) + 10;
  const statusX = pageWidth - margin - statusWidth;
  
  if (isAwarded) {
    pdf.setFillColor(230, 245, 238);
    pdf.setDrawColor(180, 225, 205);
    pdf.setTextColor(10, 110, 75);
  } else {
    pdf.setFillColor(248, 235, 235);
    pdf.setDrawColor(230, 190, 190);
    pdf.setTextColor(160, 40, 40);
  }

  pdf.roundedRect(statusX, y - 6, statusWidth, 8, 2, 2, "FD");
  pdf.text(statusText, statusX + statusWidth / 2, y - 1, { align: "center" });

  y += 12;

  pdf.setDrawColor(225, 230, 235);
  pdf.setFillColor(250, 251, 252);
  pdf.roundedRect(margin, y, contentWidth, 38, 3, 3, "FD");

  pdf.setTextColor(100, 110, 120);
  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(8);
  pdf.text(`LOTE #${award.lotId}`, margin + 6, y + 8);

  pdf.setTextColor(15, 30, 35);
  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(12);
  const lotTitle = pdf.splitTextToSize(award.title || `Lote #${award.lotId}`, contentWidth - 12);
  pdf.text(lotTitle[0], margin + 6, y + 16);

  pdf.setFont("helvetica", "normal");
  pdf.setFontSize(9);
  pdf.setTextColor(90, 100, 110);
  const description = pdf.splitTextToSize(
    award.description || "Sem descrição disponível.",
    contentWidth - 12
  );
  pdf.text(description.slice(0, 2), margin + 6, y + 23);

  y += 48;

  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(12);
  pdf.setTextColor(15, 30, 35);
  pdf.text("Detalhes da Operação", margin, y);

  y += 6;

  const details: [string, string][] = [
    ["Status do Lote", isAwarded ? "Lote Arrematado com Sucesso" : "Encerrado sem Lances"],
    ["Licitante Vencedor", isAwarded ? `Licitante #${award.winnerId}` : "Não aplicável"],
    ["Leiloeiro Responsável", `Leiloeiro #${receipt.auctioneerId}`],
    ["Valor de Arremate", isAwarded ? formatCurrency(award.finalPrice) : "R$ 0,00"],
    ["Data de Encerramento", formatDate(award.endAt)],
    ["Número do Comprovante", String(receipt.id)],
    ["Data/Hora de Emissão", formatDate(receipt.issuedAt)],
  ];

  pdf.setFontSize(9);
  const rowHeight = 8;

  details.forEach(([label, value], index) => {
    const rowY = y + index * rowHeight;

    if (index % 2 === 0) {
      pdf.setFillColor(246, 248, 249);
      pdf.rect(margin, rowY - 5, contentWidth, rowHeight, "F");
    }

    pdf.setFont("helvetica", "normal");
    pdf.setTextColor(110, 120, 130);
    pdf.text(label, margin + 4, rowY);

    pdf.setFont("helvetica", "bold");
    pdf.setTextColor(20, 35, 45);
    pdf.text(value, pageWidth - margin - 4, rowY, { align: "right" });
  });

  y += details.length * rowHeight + 8;

  if (isAwarded) {
    pdf.setFillColor(235, 247, 242);
    pdf.setDrawColor(200, 235, 220);
    pdf.roundedRect(margin, y, contentWidth, 22, 3, 3, "FD");

    pdf.setTextColor(15, 90, 65);
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(9);
    pdf.text("VALOR FINAL DO ARREMATE", margin + 6, y + 8);

    pdf.setFontSize(16);
    pdf.text(
      formatCurrency(award.finalPrice),
      pageWidth - margin - 6,
      y + 14,
      { align: "right" }
    );

    y += 30;
  } else {
    y += 5;
  }

  if (y > pageHeight - 65) {
    pdf.addPage();
    addHeader();
    y = 55;
  }

  pdf.setDrawColor(225, 230, 235);
  pdf.setFillColor(252, 253, 254);
  pdf.roundedRect(margin, y, contentWidth, 36, 3, 3, "FD");

  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(10);
  pdf.setTextColor(15, 30, 35);
  pdf.text("Código de Autenticação e Verificação", margin + 6, y + 8);

  pdf.setFont("helvetica", "normal");
  pdf.setFontSize(8.5);
  pdf.setTextColor(80, 90, 100);
  pdf.text(
    pdf.splitTextToSize(receipt.verificationCode, contentWidth - 12),
    margin + 6,
    y + 15
  );

  pdf.setFontSize(7.5);
  pdf.setTextColor(110, 120, 130);
  pdf.text(
    "Este documento possui validade comprobatória. Os dados dos participantes são protegidos por sigilo de identificação. A autenticidade pode ser validada diretamente na plataforma Arremata.",
    margin + 6,
    y + 25,
    { maxWidth: contentWidth - 12 }
  );

  addFooter();

  return pdf.output("blob");
}