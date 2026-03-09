/**
 * API Service Layer
 * Placeholder functions ready to connect to an external REST API (e.g., ASP.NET Web API).
 * Currently returns mock data from local files.
 */

const API_BASE_URL = "/api"; // Change this to your backend URL, e.g., "https://api.sahtak.com"

// Generic fetch wrapper for future backend connection
async function apiFetch<T>(endpoint: string, options?: RequestInit): Promise<T> {
  // When backend is ready, uncomment:
  // const response = await fetch(`${API_BASE_URL}${endpoint}`, {
  //   headers: { "Content-Type": "application/json", ...options?.headers },
  //   ...options,
  // });
  // if (!response.ok) throw new Error(`API Error: ${response.status}`);
  // return response.json();

  // For now, simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 300));
  throw new Error("Not implemented - using mock data");
}

// Doctor APIs
export const doctorApi = {
  getAll: () => apiFetch("/doctors"),                    // GET /api/doctors
  getById: (id: string) => apiFetch(`/doctors/${id}`),   // GET /api/doctors/:id
  search: (params: Record<string, string>) => {          // GET /api/doctors?specialty=...&city=...
    const query = new URLSearchParams(params).toString();
    return apiFetch(`/doctors?${query}`);
  },
};

// Pharmacy APIs
export const pharmacyApi = {
  getAll: () => apiFetch("/pharmacies"),                    // GET /api/pharmacies
  getById: (id: string) => apiFetch(`/pharmacies/${id}`),   // GET /api/pharmacies/:id
  searchMedicine: (query: string) => apiFetch(`/pharmacies/medicines?q=${query}`),
};

// Appointment APIs
export const appointmentApi = {
  create: (data: unknown) => apiFetch("/appointments", { method: "POST", body: JSON.stringify(data) }),
  getMyAppointments: () => apiFetch("/appointments/me"),     // GET /api/appointments/me
  cancel: (id: string) => apiFetch(`/appointments/${id}`, { method: "DELETE" }),
};

// Auth APIs
export const authApi = {
  login: (data: { email: string; password: string }) =>
    apiFetch("/auth/login", { method: "POST", body: JSON.stringify(data) }),
  register: (data: unknown) =>
    apiFetch("/auth/register", { method: "POST", body: JSON.stringify(data) }),
  forgotPassword: (email: string) =>
    apiFetch("/auth/forgot-password", { method: "POST", body: JSON.stringify({ email }) }),
};

export { API_BASE_URL };
