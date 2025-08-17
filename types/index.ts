// API Response Types
export interface ApiResponse<T> {
  data: T
  links?: {
    first: string
    last: string
    prev: string | null
    next: string | null
  }
  meta?: {
    current_page: number
    from: number
    last_page: number
    links: Array<{
      url: string | null
      label: string
      active: boolean
    }>
    path: string
    per_page: number
    to: number
    total: number
  }
  message?: string
}

// Dashboard Types
export interface TrendOfPurchase {
  year: number
  month: string
  total_amount: number
}

export interface FuelPurchase {
  id: number
  company_id: number
  vendor_id: number
  user_id: number
  cost_center_id: number
  way_bill_number: string
  nfctag_id: number
  driver_id: number
  vendor_station_name: string
  vehicle_plate_number: string
  auth_type: string
  barcode_id: string | null
  amount_paid: number
  volume: number
  odometer_reading: string
  product: string
  pump: number
  selling_price: number
  current_credit_limit: number
  attendant: string
  last_volume_dispensed: number
  last_amount_paid: number
  transaction_seq_no: string | null
  is_balanced: number
  oem_station_id: number
  sm_station_id: number
  balance_refunded: number | null
  tapnet_amount: number | null
  tapnet_volume: number | null
  tapnet_transaction_time: string | null
  thankucash_reward_applied: number | null
  thankucash_reward_value: number | null
  app_mode: string
  mac_address: string | null
  release_token: string
  is_fdc_value_fill: number
  fdc_volume: number | null
  fdc_amount: number | null
  last_tsn_source: string | null
  verified_volume: number
  verified_amount: number
  reconciliation_source: string | null
  one_time_auth_id: number | null
  recon_balance_refunded: number
  created_at: string
  updated_at: string
  deleted_at: string | null
  transaction_id: number | null
  fleet_request_volume: number | null
  driver: Driver
  company: Company
  vendor: Vendor
  costCenter: CostCenter
  nfcTag: NfcTag
  userWallet: UserWallet
  remark: string | null
}

export interface Transaction {
  id: number
  ref: string
  company_id: number
  company_wallet_id: number
  vendor_id: number
  company_temps_id: number
  initiator_id: number
  payment_mode_id: number
  status: string
  total_charged_amount: number
  original_amount: number
  gateway_charged: number
  wallet_amount: number
  amount_paid: number
  fee_paid: number
  webhook_confirmed: string | null
  date_webhook_confirmed: string
  date_transaction_verified: string
  verification_means: string
  payment_cause: string
  initiating_users_name: string
  initiating_users_email: string | null
  paystack_subaccount_code: string
  created_at: string
  updated_at: string
  deleted_at: string | null
}

export interface TopPurchasingVehicle {
  vehicle_plate_number: string
  total_purchase_amount: number
  total_purchase_volume: number
}

export interface Summary {
  total_cost_centers: number
  total_driver: number
  total_fuel_purchases: number
  total_vehicle: number
  total_volume: number
  total_amount: number
  current_week_avg_pms_purchase: any
  current_week_avg_ago_purchase: {
    year_week: number
    avg_amount: number
    avg_volume: number
  }
  current_month_total_pms_purchase: {
    month: string
    avg_amount: number
    avg_volume: number
  }
  current_month_total_ago_purchase: {
    month: string
    avg_amount: number
    avg_volume: number
  }
  current_week_total_pms_purchase: any
  current_week_total_fuel_purchase: {
    year_week: number
    avg_amount: number
    avg_volume: number
  }
}

// Vendor Types
export interface Vendor {
  id: number
  sm_company_id: number
  name: string
  address: string
  email: string
  phone_number: string
  country: string
  state: string
  city: string
  postcode: string | null
  products_sold: string
  payment_type: string
  contact_person: string
  registration_number: string
  status: number
  has_active_paga_account: number | null
  on_loyalty_program: number
  created_at: string
  updated_at: string
  deleted_at: string | null
  se_company_id: number
  vendor_additional_details?: VendorAdditionalDetails
  bank_accounts?: any
  wallet_details?: any
  app_config?: any
  paga_details?: any
  groups?: any[]
}

export interface VendorAdditionalDetails {
  id: number
  company_id: number
  company_group_id: number | null
  vendor_id: number
  status: string
  partnership_code: string | null
  active: number
  partnership_ppv_mode: string
  pms_ppv: number | null
  ago_ppv: number | null
  discount_mode: string | null
  created_at: string
  updated_at: string
  deleted_at: string | null
  vendor: Vendor
  company: Company
}

// Wallet Types
export interface Wallet {
  id: number
  vendor_id: number
  company_id: number
  wallet_id: string
  balance: number
  credit_limit: string
  active: number
  created_by: number | null
  created_at: string
  updated_at: string
  deleted_at: string | null
  vendor: Vendor
  company: Company
  nfctag: NfcTag | null
}

// User Types
export interface User {
  id: number
  title: string
  name: string
  email: string
  phone: string
  avatar: string | null
  username: string
  gender: string
  newsletter: number
  active: number
  card_brand: string | null
  card_last_four: number | null
  is_admin: number
  is_vendor: number
  active_vendor_group: number | null
  active_vendor: number
  otp: string | null
  created_at: string
  updated_at: string
  deleted_at: string | null
  companies: Company[]
  vendors: Vendor[]
  bankAccount?: BankAccount
  permissions: Permission[]
  costCenters: any[]
  roles: Role[]
  stations: any[]
  wallet_details: any
}

export interface BankAccount {
  id: number
  vendor_id: number
  account_number: string
  bank_name: string
  account_name: string
  paystack_id: number
  paystack_subaccount_code: string
  payment_mode: string
  merchantcodes: string
  active: number
  created_at: string
  updated_at: string
  deleted_at: string | null
}

export interface Permission {
  id: number
  name: string
  module?: string
  guard_name?: string
  created_at?: string | null
  updated_at?: string | null
  pivot?: {
    company_id?: number
    user_id?: number
    permission_id: number
  }
}

export interface Role {
  id: number
  name: string
  guard_name: string
  created_at: string | null
  updated_at: string | null
  pivot: {
    user_id: number
    role_id: number
  }
}

// NFC Tag Types
export interface NfcTag {
  id: number
  company_id: number
  vendor_id: number
  user_id: number
  station_id: number | null
  pin: string
  nfctag_type: string
  nfctag_code: string
  nfctag_oem_id: string
  nfctag_url_slug: string | null
  created_by: number | null
  card_number: string | null
  card_on_thankucash: string | null
  card_state: string
  station_name: string | null
  active: number
  created_at: string
  updated_at: string
  deleted_at: string | null
  upload_id: number | null
  vendor: Vendor
  station: any
  createdBy: any
  company: Company
  vehicles: Vehicle[]
  user: User
}

// Cost Center Types
export interface CostCenter {
  id: number
  company_id: number
  name: string
  email: string
  phone_number: string
  daily_purchase_budget: number
  weekly_purchase_budget: number
  monthly_purchase_budget: number
  license_type: string
  active: number
  created_at: string
  updated_at: string
  deleted_at: string | null
}

// User Wallet Types
export interface UserWallet {
  id: number
  vendor_id: number
  user_id: number
  wallet_id: string
  balance: number
  credit_limit: number
  active: number
  created_by: number | null
  created_at: string
  updated_at: string
  deleted_at: string | null
  vendor_wallet_id: number
}

// Existing Types
export interface Company {
    id: number
    name: string
    email: string
    phone_number: string
    registration_number: string
    country: string
    state: string
    city: string
    postcode: string
    address: string
    sector: string
    tin: string
    website: string
    logo: string | null
    active: boolean
    on_loyalty_program: boolean
    contact_person_first_name: string | null
    contact_person_lastname: string | null
    app_uid: string
    loyalty_points_by_group?: number
    loyalty_reward_percentage?: number | null
    loyalty_reward_points?: number | null
    loyalty_min_purchase_amount?: number | null
    loyalty_min_point?: number | null
    created_at: string
    updated_at: string
    deleted_at?: string | null
}

export interface Driver {
    id: number
    company_id: number
    fullname: string
    address: string
    phone_number: string
    email: string
    driver_speciality: string
    status: string
    created_at: string
    updated_at: string
    deleted_at: string | null
    company?: Company
}

export interface Vehicle {
    id: number
    company_id: number
    cost_center_id: number | null
    group_id: number | null
    driver_id: number | null
    nfc_tag_id: number | null
    registration_number: string
    tank_capacity: string
    auth_type: string | null
    tracker_id: string | null
    model: string | null
    engine_capacity: string | null
    fuel_type: string
    color: string
    brand: string
    reward_type: string | null
    active: number
    created_at: string
    updated_at: string
    deleted_at: string | null
    weight: string
    tonnage: string
    trailer_type: string
    age: string
    vendor_id: number | null
    vehicle_plate_number: string
    company?: Company
    driver?: Driver
}