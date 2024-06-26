export interface MetaDataDto {
    active_module: string;
    active_section: string;
    created_at: string; // ISO 8601 date-time format
    id: string;
    progress: number;
    video_timestamp: number;
    number_of_questions: number;
    number_of_certificate: number;
    number_of_completed_modules: number;
    number_of_answered_questions: number;
}