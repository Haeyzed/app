declare module '@tabler/icons-react' {
  import { ComponentType, SVGProps } from 'react'
  
  export interface IconProps extends SVGProps<SVGSVGElement> {
    size?: number | string
    stroke?: number | string
    className?: string
  }
  
  export const IconDashboard: ComponentType<IconProps>
  export const IconBuilding: ComponentType<IconProps>
  export const IconTruck: ComponentType<IconProps>
  export const IconUsers: ComponentType<IconProps>
  export const IconCar: ComponentType<IconProps>
  export const IconCreditCard: ComponentType<IconProps>
  export const IconQrcode: ComponentType<IconProps>
  export const IconGasStation: ComponentType<IconProps>
  export const IconCalculator: ComponentType<IconProps>
  export const IconKey: ComponentType<IconProps>
  export const IconUserCheck: ComponentType<IconProps>
  export const IconSettings: ComponentType<IconProps>
  export const IconReport: ComponentType<IconProps>
  export const IconShield: ComponentType<IconProps>
  export const IconWallet: ComponentType<IconProps>
  export const IconUser: ComponentType<IconProps>
  export const IconInnerShadowTop: ComponentType<IconProps>
  export const IconChevronDown: ComponentType<IconProps>
  export const IconChevronRight: ComponentType<IconProps>
  export const IconDotsVertical: ComponentType<IconProps>
  export const IconLogout: ComponentType<IconProps>
  export const IconUserCircle: ComponentType<IconProps>
  export const IconNotification: ComponentType<IconProps>
}
