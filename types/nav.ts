import { Icon } from "lucide-react";

export interface NavItem {
  title: string;
  href?: string;
  icon?: Icon;
  disabled?: boolean;
  external?: boolean;
}
