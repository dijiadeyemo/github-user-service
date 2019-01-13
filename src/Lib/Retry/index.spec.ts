import Retry from './index';

describe('Retry', () => {
    describe('execute()', () => {
        test('should try once where there is no error', async () => {
            const config = {
                action: jest.fn(),
                shouldRetryOnResult: () => false,
                shouldRetryOnError: () => true,
                retries: 2
            };
            await new Retry(config).execute();
            expect(config.action).toBeCalledTimes(1);
        });

        test('should return action result on successful try', async () => {
            const config = {
                action: async () => 'test',
                shouldRetryOnResult: () => false,
                shouldRetryOnError: () => true,
                retries: 2
            };
            const result = await new Retry(config).execute();
            expect(result).toEqual('test');
        });

        test.only('should throw error if retry limit reached without success', async () => {
            const config = {
                action: jest.fn().mockImplementation(() => { throw new Error('message') }),
                shouldRetryOnResult: () => false,
                shouldRetryOnError: () => true,
                retries: 3
            };
            try {
                await new Retry(config).execute();
                expect(0).toBe(1);
            } catch (e) {
                expect(e).toHaveProperty('message', 'message');
            }


        });
    });

});