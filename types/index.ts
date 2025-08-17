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