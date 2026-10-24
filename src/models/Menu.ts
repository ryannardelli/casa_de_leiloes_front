import {
    LayoutDashboard,
    Gavel,
    Package,
    PlusCircle,
    Wallet,
    Trophy,
    History,
    UserRound} from "lucide-react";

const AVAILABLE_ICONS = {
    LayoutDashboard,
    Gavel,
    Package,
    PlusCircle,
    Wallet,
    Trophy,
    History,
    UserRound
};

export type IconName = keyof typeof AVAILABLE_ICONS;

export interface Menu {
    id: string;
    name: string;
    icon: IconName;
    route: string;
    order?: number;
}