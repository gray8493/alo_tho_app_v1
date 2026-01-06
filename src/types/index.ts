export interface UserProfile {
    id: string;
    email: string;
    full_name?: string;
    avatar_url?: string;
    role: 'customer' | 'worker' | 'admin';
    created_at: string;
}

export interface Job {
    id: string;
    title: string;
    description: string;
    category: string;
    status: 'pending' | 'assigned' | 'completed' | 'cancelled';
    customer_id: string;
    worker_id?: string;
    location: string;
    budget?: number;
    created_at: string;
    updated_at: string;
}

export interface Worker {
    id: string;
    user_id: string;
    skills: string[];
    rating: number;
    bio?: string;
    is_verified: boolean;
}
