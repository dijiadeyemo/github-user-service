export default interface IRetryable {
     action: () => Promise<any>;
     shouldRetryOnResult: (result: any) => boolean;
     shouldRetryOnError: (error: Error) => boolean;
     retries: number;
}