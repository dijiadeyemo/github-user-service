
import IRetryable from "./IRetryable";
import retry from 'async-retry';

export default class Retry {
    
    public constructor(private retryable: IRetryable) { }

    async execute(): Promise<any> {
        const { retries } = this.retryable;
        const retryAction = this.prepareRetryableAction()
        const result = await retry(retryAction, { retries, factor: 1 })
        return result
    }

    //TODO refactor
    private prepareRetryableAction(): (bail: any) => Promise<any> {
        const retryableAction = async (bail: (arg: any) => any) => {
            try {
                const result = await this.retryable.action();
                const shouldRetry = this.retryable.shouldRetryOnResult(result);
                if (shouldRetry) throw new Error('Invalid result')
                return result;
            } catch (e) {
                const retryOnError = await this.retryable.shouldRetryOnError(e);
                if (retryOnError) throw e
                return bail(e)
            }
            
        };
        return retryableAction;
    }

}