
export type PaginationQueryType = {
    page?: number | 10,
    limit?: number | 0
}

export type PaginateType = {
    page: number,
    limit: number,
    total_items: number
}

export type StudentType = {
    student_id: string,
    name: string,
    email: string,
    phone: string,
    department: string,
    address: string,
    city: string,
    country: string
}

