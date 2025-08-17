import { auth } from "@/auth"
import { Company, Driver, Vehicle, Vendor, Wallet, User, NfcTag, ApiResponse } from "@/types"

const API_BASE_URL = "https://cupidapiv2.smartflowtech.org/api"

class HttpClient {
  private async getHeaders(): Promise<HeadersInit> {
    const session = await auth()
    const headers: HeadersInit = {
      "Content-Type": "application/json",
    }

    if (session?.accessToken) {
      headers.Authorization = `Bearer ${session.accessToken}`
    }

    return headers
  }

  private async handleResponse<T>(response: Response): Promise<ApiResponse<T>> {
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      throw new Error(errorData.message || `HTTP error! status: ${response.status}`)
    }

    return response.json()
  }

  async get<T>(endpoint: string, params?: Record<string, any>): Promise<ApiResponse<T>> {
    const headers = await this.getHeaders()
    const url = new URL(`${API_BASE_URL}${endpoint}`)

    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          url.searchParams.append(key, value.toString())
        }
      })
    }

    const response = await fetch(url.toString(), {
      method: "GET",
      headers,
    })

    return this.handleResponse<T>(response)
  }

  async post<T>(endpoint: string, data?: any): Promise<ApiResponse<T>> {
    const headers = await this.getHeaders()

    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: "POST",
      headers,
      body: data ? JSON.stringify(data) : undefined,
    })

    return this.handleResponse<T>(response)
  }

  async put<T>(endpoint: string, data?: any): Promise<ApiResponse<T>> {
    const headers = await this.getHeaders()

    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: "PUT",
      headers,
      body: data ? JSON.stringify(data) : undefined,
    })

    return this.handleResponse<T>(response)
  }

  async delete<T>(endpoint: string): Promise<ApiResponse<T>> {
    const headers = await this.getHeaders()

    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: "DELETE",
      headers,
    })

    return this.handleResponse<T>(response)
  }

  // Dashboard APIs
  async getTrendsOfPurchase(perPage: number = 10000) {
    return this.get<any[]>("/kpi/trends_of_purchase", { per_page: perPage })
  }

  async getLatestFuelPurchases(perPage: number = 10) {
    return this.get<any[]>("/kpi/latest_fuel_purchases", { per_page: perPage })
  }

  async getLatestTransactions(perPage: number = 10000) {
    return this.get<any[]>("/kpi/latest_transactions", { per_page: perPage })
  }

  async getTopPurchasingVehicles(perPage: number = 10) {
    return this.get<any[]>("/kpi/top_purchasing_vehicles", { per_page: perPage })
  }

  async getSummary() {
    return this.get<any>("/kpi/summary")
  }

  // General Admin APIs
  async getVendors(perPage: number = 10000, status: boolean = true): Promise<ApiResponse<Vendor[]>> {
    return this.get<Vendor[]>("/vendors", { per_page: perPage, status })
  }

  async getCompanies(perPage: number = 10000, status: boolean = true): Promise<ApiResponse<Company[]>> {
    return this.get<Company[]>("/companies", { per_page: perPage, status })
  }

  async getDrivers(perPage: number = 10000, status: boolean = true): Promise<ApiResponse<Driver[]>> {
    return this.get<Driver[]>("/drivers", { per_page: perPage, status })
  }

  async getVehicles(perPage: number = 10000, status: boolean = true): Promise<ApiResponse<Vehicle[]>> {
    return this.get<Vehicle[]>("/vehicles", { per_page: perPage, status })
  }

  async getWallets(perPage: number = 10000): Promise<ApiResponse<Wallet[]>> {
    return this.get<Wallet[]>("/company_wallets", { per_page: perPage })
  }

  async getCompanyUsers(perPage: number = 10, page: number = 1, companyId?: number): Promise<ApiResponse<User[]>> {
    const params: any = { per_page: perPage, page }
    if (companyId) params.company_id = companyId
    return this.get<User[]>("/company_users", params)
  }

  async getNfcTags(perPage: number = 10, page: number = 1, companyId?: number): Promise<ApiResponse<NfcTag[]>> {
    const params: any = { per_page: perPage, page }
    if (companyId) params.company_id = companyId
    return this.get<NfcTag[]>("/nfc_tags", params)
  }

  // Authentication
  async logout() {
    return this.post<any>("/oauth/logout")
  }
}

export const httpClient = new HttpClient()
