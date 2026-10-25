import { z } from "zod";

export const CreateLotSchema = z.object({
  externalItemId: z
    .string()
    .nonempty("Selecione uma obra válida."),

  startingPrice: z
    .number()
    .positive("O preço inicial deve ser maior que zero."),

  minimumIncrement: z
    .number()
    .positive("O incremento mínimo deve ser maior que zero."),

  startAt: z
    .string()
    .nonempty("A data de início não pode ficar vazia.")
    .datetime("Informe uma data de início válida."),

  endAt: z
    .string()
    .nonempty("A data de término não pode ficar vazia.")
    .datetime("Informe uma data de término válida."),
});

export type CreateLotFormData = z.infer<typeof CreateLotSchema>;