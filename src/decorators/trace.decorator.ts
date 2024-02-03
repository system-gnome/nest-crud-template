import { SetMetadata } from '@nestjs/common';
import { getTraceId } from 'src/services/tracing.service';

export const Tracer = () => {
  return (target: any, key: string, descriptor: PropertyDescriptor) => {
    SetMetadata('logFunctionName', key)(target, key, descriptor);
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
      console.log(`Calling function: ${key} trace: ${getTraceId().traceId}`);
      return originalMethod.apply(this, args);
    };

    return descriptor;
  };
};
