export default class ErrorRepository {
    constructor() {
        this.errors = new Map([
            [404, 'Not Found'],
            [500, 'Internal Server Error'],
            [403, 'Forbidden'],
            [401, 'Unauthorized']
        ]);
    }

    translate(code) {
        if (!this.errors.has(code)) {
            return 'Unknown error';
        }

        return this.errors.get(code);
    }
}


