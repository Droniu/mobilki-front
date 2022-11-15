export interface Visit {
    id: string;
    datetime: string;
    place: string;
    doctor: Doctor;
    patient?: Patient;
}

export interface Doctor {
    id: string;
    name: string;
    thumbnail: string;
}

export interface Patient {
    id: string;
    firstName: string;
    lastName: string;
    pesel: string;
    address: string;
    telephone: string;
    gender: string;
}