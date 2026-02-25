export interface Technician {
  id: string;
  name: string;
  avatar: string;
  role?: string;
}

export interface WorkOrder {
  id: string;
  vehicle: string;
  issue: string;
  tech: Technician;
  progress: number;
  status: 'In Progress' | 'QA Review' | 'Completed' | 'Pending';
  priority: 'High' | 'Normal';
  createdAt: string;
}

export interface Part {
  id: string;
  name: string;
  partNumber: string;
  price: number;
  quantity: string;
  status: 'Available' | 'Reserved' | 'Ordered';
  icon: string;
  image: string;
}

export interface Invoice {
  id: string;
  client: string;
  email: string;
  amount: number;
  dueDate: string;
  status: 'Paid' | 'Partial' | 'Overdue' | 'Pending';
  initials: string;
}

export interface Vehicle {
  id: string;
  make: string;
  model: string;
  type: string;
  plate: string;
  year: number;
  owner: string;
  ownerAvatar?: string;
  status: 'Active' | 'Maintenance' | 'Inactive';
  icon: string;
}

export interface Client {
  id: string;
  name: string;
  phone: string;
  email: string;
  vehicles: string[];
  spend: number;
  avatarGradient: string;
}

export const TECHNICIANS: Technician[] = [
  { id: '1', name: 'Mike R.', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAgOIxC4Ky0TgLnCrL0fTqKznPcJVZU-YjwgMFxMjUXnI4CnempYFDeyCjqjzPZpbKpbf8H0EQ5nHerA0WFDYTYuDGgHpUdlMy_BVRfrodzSfUYXx192pz2AjdtvZnbHW8H4A8MTriK0B7LGvaibapPvfAiTzFlzqc4sqMd4KeTscz2S0mrDV2iS2CJ8CiyV16gUkVATQGixX7DkCjzZ7pA3xCIj0F6bdYN7W09hrlm_VZ6DCkKpPpcRausGkU9sk1tWzKXkMM7BSd5' },
  { id: '2', name: 'Sarah J.', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDrB6Dl0mXHjqMT4PQWP06ZFpFdcSL_PBpGqEhLJgRk2go4ssSs8q9YG0G3HtmJFNeN47vcrdtlwrJPEZZYIN1rwLaNKd5Jtwn2I9gYOpqdazZ0SsSD7owBRyxw7eVekmgIUoOLm_rdoUC8QV60nBJ98cE8pS4JHJr5WiWRYn3r1_QpfKdIL-Axlv6XhbCX_OO_T3jN4Yg_uJGvIFOdOB8VSOlPR3m__gbi9JFdlmQ_uC_bKBNaYQw3R0DvaL9LblQUg7EaRyWmR-1b' },
  { id: '3', name: 'David L.', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB8tDB0JOm1S98DpF7Vj3hUzre2gvkqB9d9xQESCKx0DBAQ36G9f7pzLftabaUbspgn6UKg6k7xIViiNsUHpMLXwDflmd1iXLSNmTeInmMZV6qsqxzgZE7GFELgnAxaKbokj-QgawV24eGvLygDFNNwCaVie5a7Ryrn5ckif6qqc1Yn3iD5PyQiU4lpgnpRux9EebQvK5YnvlOBPN8y6DkiFZoHj7R4RXljaqyZdUijYIkG5p08WXnvQPlKPm4kO3KNsrFZKBMPwck8' },
  { id: '4', name: 'James T.', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZeuGqmYDgDx4K9jUPcjJ2AqfANFfpVeNXA7w-l5UdoKCUjTNxc9fOk_4hmum-KMjiJpunY1OrvtdU9qUv-WDgJHR7g40_7CFEBQvIAGvq7mDgf1sJr9ZlPgFzY3KdNjuefcTCofRvk5zfeFkatRVUMdFPAuxAmDbnpzBSqcvCBN-hRUo6E7dT79EiE5bkhsq4E_0W-DmTS0osfzlsfaQtbseIdeWEjD0Yk_QL-wI0bM5Dx8LILQ4NvumSZLT5Y5sfJcQhty_0edh2' },
  { id: '5', name: 'Elena G.', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDDYgStsuglzxVF5OxWe1SCaBC73KphSn3navL7rVbv6dwIhh-_ZXpZOCTSBAoWut2pVfhhHP9BKnAbryC1VrEkVwyfZ4cUaq_e7GrWqXicALefPYGXNRUS2Jx3jw-OyLE9zaefg7rFAFuUzaKT-2LZfjPowDdcImzKV-KRXk_u9ZVid0F8heGLm87EV9UDrIklslVmeIIV7MuOjc8N9Z53J26CxrEPrjtDt_xBGdifO5-O0OyMl4Dx03vpPiZGXCBtXGMq-exymJu4' },
];

export const WORK_ORDERS: WorkOrder[] = [
  { id: 'WO-2024-001', vehicle: 'Ford Transit #402', issue: 'Brake System Failure', tech: TECHNICIANS[0], progress: 75, status: 'In Progress', priority: 'High', createdAt: '2 hrs ago' },
  { id: 'WO-2024-002', vehicle: 'Toyota Camry #118', issue: 'Oil Change & Filter', tech: TECHNICIANS[1], progress: 40, status: 'QA Review', priority: 'Normal', createdAt: '5 hrs ago' },
  { id: 'WO-2024-003', vehicle: 'Chevy Bolt #205', issue: 'Battery Diagnostics', tech: TECHNICIANS[2], progress: 90, status: 'In Progress', priority: 'Normal', createdAt: '1 day ago' },
  { id: 'WO-2024-004', vehicle: 'Honda Civic #330', issue: 'Tire Rotation & Balance', tech: TECHNICIANS[3], progress: 22, status: 'In Progress', priority: 'High', createdAt: '3 hrs ago' },
  { id: 'WO-2024-005', vehicle: 'Ford F-150 #512', issue: 'Transmission Fluid Check', tech: TECHNICIANS[4], progress: 100, status: 'Completed', priority: 'Normal', createdAt: 'yesterday' },
];

export const PARTS: Part[] = [
  { id: '1', name: 'Brake Pads (Ceramic)', partNumber: 'BP-001', price: 45.00, quantity: '24 in stock', status: 'Available', icon: 'disc_full', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBzhX5Vo5WHl1D1BblP1Tx_81t3eyTFdOpD12jTgxlfgKaYfKIJc-4u1UNe04hBETieMhjPXFEcrYy2x1q3vwZTufnDkZAVU6PgrEXQ-ApN7FjOz5gZTeYj-QlfbFeyQ9dWgj8DdgqhGUvR9i-NMi4U9tOTAijmEzy-kVcZyHuwEP60WB_s8hWO_55690i7lIgo7ZtSjF3t3DJnsohGvYVI_zO8lVSXAqYr_ES_KXixWWDptc1b9baszdtMBQXbtQly2x_9H22LODdW' },
  { id: '2', name: 'Synthetic Oil 5W-30', partNumber: 'OL-5W30', price: 12.00, quantity: '150 in stock', status: 'Available', icon: 'oil_barrel', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA9ygr60X6ZsDQHKYX2Fk_NVPXRR94Swvc5jQn3CHT8qLEWZKqlcDUd5XxJhgYO0zaeTCBYoJa82VAItV35Z286RA6dHwyHab7V5eweZ-ACpuXRl2Dn9R7IQUp9bisZ2o8C2CYFMyUwx8wgs328dAyNzZfBEzLLZ7iIzKUVK932XYl2MpFXyYTq6HwfDmD8SWarFIpPsl3BxNTaBVt9Kqdk8TjFz01GE85efV7SKq1mEHi7ndnbZPBBWz84dHclW4r0YA5UOx4cY3w0' },
  { id: '3', name: 'Oil Filter Premium', partNumber: 'OF-992', price: 8.50, quantity: '42 in stock', status: 'Available', icon: 'settings_suggest', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCurVJ_63WU1sQEn_WJaiM6wDADfG7vNYFCg6sfpcCwnfg6uy0C7qlIzl66hMDkMpSjYfhRCawjoO5i2sZu3zvo6qtweBSacXff-GQcGmzktqPc3xpKcHdMjKQgjIble9dKd8A7OBPhM4U_SVMC48B1ZAB02aSz6wmdOifkygTdU_U4nKyw7JoRdrV8m6nDrInl2HUB_4lLjTOCp1vxrm_Z-SFEDCNU3AM-5P1hCZ312XEr3T78aBOIDu1yxUtvqm8mnw8rUaI2pOZ6' },
  { id: '4', name: 'All-Season Tire 17"', partNumber: 'T-225', price: 120.00, quantity: 'Low stock', status: 'Available', icon: 'tire_repair', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC7yQE6O4qeukAuSn6tBc-YZ5Au4TjF2n_wF9nnBerVkjyUCkcYLXzVfWmjj-G00lnNRJ3eiU-PqiLl0LOYPhVLR5alt0F8dVM_c8O464eGLkn_mr4ZjwC13Of9qRU8rEjR24N3j0J7ug2_IuhvrbnEnvlzxggm4OqQViK-Z8HfM9zvNxAr0mxNdMAKa3OSHP56X0Pw-TeNfXb31xC4FUn0K-MWk1N_LlT4aDPrBxi1yodBZvRloppsd34xKdzwdmr9cAOsSLM10_rn' },
];

export const INVOICES: Invoice[] = [
  { id: 'INV-2023-001', client: 'Acme Corp', email: 'logistics@acme.com', amount: 1200.00, dueDate: 'Oct 24, 2023', status: 'Paid', initials: 'AC' },
  { id: 'INV-2023-002', client: 'Logistics Inc', email: 'billing@logistics.inc', amount: 450.50, dueDate: 'Oct 28, 2023', status: 'Partial', initials: 'LI' },
  { id: 'INV-2023-003', client: 'Speedy Delivery', email: 'ops@speedy.com', amount: 2300.00, dueDate: 'Oct 20, 2023', status: 'Overdue', initials: 'SD' },
  { id: 'INV-2023-004', client: 'Global Transport', email: 'admin@globaltrans.com', amount: 890.00, dueDate: 'Nov 02, 2023', status: 'Paid', initials: 'GT' },
  { id: 'INV-2023-005', client: 'City Taxi', email: 'finance@citytaxi.com', amount: 150.00, dueDate: 'Nov 05, 2023', status: 'Pending', initials: 'CT' },
  { id: 'INV-2023-006', client: 'Metro Fleet', email: 'payments@metrofleet.co', amount: 3400.00, dueDate: 'Oct 12, 2023', status: 'Paid', initials: 'MF' },
];

export const VEHICLES: Vehicle[] = [
  { id: '1', make: 'Toyota', model: 'Camry', type: 'Sedan • LE Hybrid', plate: 'ABC-1234', year: 2021, owner: 'John Smith', ownerAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBgZMA1U4saWQnt2QOj3iaUf0hztYBnwdVzlA-Cv4gEC3vYc8sCgwAzf3eyEgpgbN7kxLXloxHBdRNgVeJmCB1BgxMHyozCmBMwZd6sIScoE5oCzh9-1CqS9oVME7jEV6WoJJ2Lv_JxLo9nDyIqIg23At7noE-hbB5bM4gznmxeSpBjfo-DueK8De0pQuO_e8Ocquj8961HsFIWTfFG_soDJ6B52-3h6of218sRrIiemmN7IcJTJ6Y9sXQGO2r77ToHkcI7QFnrQZcH', status: 'Active', icon: 'directions_car' },
  { id: '2', make: 'Ford', model: 'F-150', type: 'Truck • XLT', plate: 'XYZ-5678', year: 2020, owner: 'Construction Corp', status: 'Active', icon: 'local_shipping' },
  { id: '3', make: 'Honda', model: 'Civic', type: 'Sedan • EX', plate: 'LMN-9012', year: 2019, owner: 'Jane Doe', ownerAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCunX2eCkOW4BBe9UMFHRC82_skWd1V3m9TrXWzcXeeeJnJV29MXECqcC-Sz0Fho6vPTyc8aHlHN0U4M4fidSPV_ynsLqyEVIoBwC7NOg5r7DDI1YnGMG1UAwXWJfkEqxTm6ZMJYKLb5oCUWZcs75lmXcHw64XcZDrmAVFwe-19RF5wwtlFGDVGZ_OmSZ1iENkZVwG8_D2OFdHfrtGGkyuKd2xIp1yCptcmbRhponuAhc5lxR5oBtoM690-G3YzluKL3wfyvLOHyiK3', status: 'Maintenance', icon: 'directions_car' },
  { id: '4', make: 'Tesla', model: 'Model 3', type: 'Electric • Long Range', plate: 'TES-3321', year: 2022, owner: 'Tech Solutions', status: 'Active', icon: 'electric_car' },
  { id: '5', make: 'Chevrolet', model: 'Bolt', type: 'Electric • Premier', plate: 'ELEC-99', year: 2018, owner: 'City Fleet', status: 'Inactive', icon: 'electric_car' },
  { id: '6', make: 'Ram', model: '1500', type: 'Truck • Laramie', plate: 'TRK-4455', year: 2021, owner: 'Logistics Inc', status: 'Active', icon: 'local_shipping' },
];

export const CLIENTS: Client[] = [
  { id: '1', name: 'John Doe', phone: '(555) 123-4567', email: 'john.doe@example.com', vehicles: ['2018 Toyota Camry'], spend: 1245.00, avatarGradient: 'from-blue-400 to-purple-500' },
  { id: '2', name: 'Jane Smith', phone: '(555) 987-6543', email: 'jane.smith@test.com', vehicles: ['2021 Honda CR-V'], spend: 3450.00, avatarGradient: 'from-pink-400 to-orange-500' },
  { id: '3', name: 'Robert Johnson', phone: '(555) 555-0199', email: 'r.johnson@corp.net', vehicles: ['2019 Ford F-150'], spend: 890.50, avatarGradient: 'from-green-400 to-teal-500' },
  { id: '4', name: 'Emily Davis', phone: '(555) 111-2222', email: 'emily.d@mail.com', vehicles: ['2020 Tesla Model 3'], spend: 5120.00, avatarGradient: 'from-purple-400 to-indigo-600' },
  { id: '5', name: 'Michael Wilson', phone: '(555) 444-3333', email: 'm.wilson@demo.com', vehicles: ['2015 Chevy Malibu', '2019 Ford F-150'], spend: 450.00, avatarGradient: 'from-yellow-400 to-red-500' },
  { id: '6', name: 'Sarah Brown', phone: '(555) 777-8888', email: 'sarah.b@email.org', vehicles: ['2022 BMW X5'], spend: 2300.00, avatarGradient: 'from-cyan-400 to-blue-600' },
];
