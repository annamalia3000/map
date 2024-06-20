import ErrorRepository from '../errorRepository.js';

test('translate known code', () => {
    let repo = new ErrorRepository;
    expect(repo.translate(404)).toBe('Not Found');
    expect(repo.translate(500)).toBe('Internal Server Error');
    expect(repo.translate(403)).toBe('Forbidden');
    expect(repo.translate(401)).toBe('Unauthorized');
});

test('throw error for unknown code', () => {
    let repo = new ErrorRepository;
    expect(repo.translate(400)).toBe('Unknown error');
});