import { environment } from '../../environments/environment';

export const CONSTANTS = {
    // PRODUCTION
    BASE_API_URL: environment.backendUrl,
    DISABLE: false,

    // Local storage
    TOKEN: 'token',

    TIMESTAMP_24_HOURS: 86400000
}
