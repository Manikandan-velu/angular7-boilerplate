export class Horse {
    id: number;
    user_id: number;
    horse_number: string;
    association_number: string;
    association_note: string;
    horse_name: string;
    aqha_number: string;
    oef_number: string;
    tip_number: string;
    breed_register_number: string;
    usdf_number: string;
    chip_number: string;
    remark: string;
    color: string;
    height_hands: number;
    height_inches: number;
    meas_card: string;
    mesa_date: string;
    breed_id: number;
    sire: string;
    dam: string;
    dob: string;
    age_verified: boolean;
    owner_id: number;
    date_blood_drawn: string;
    vaccination_date: string;
    lab_name: string;
    province_state: string;
    vaccination_association_number: string;
    ushja_registered: boolean;
    usef: string;
    fei: string;
    usef_info: string;
    fei_info: string;
    profile_pic: string;
    green: string;
    type: string;
    sex: string
}

export class User {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    other_role: string;
    ph_country_code: string;
    phone_number: string;
    profile_pic: string;
    role: number;
    access_token: string;
}