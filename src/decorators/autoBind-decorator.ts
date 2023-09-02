//auto bind Decorator

namespace App {
  export function autoBind(
    _: any,
    _2: string,
    descriptor: TypedPropertyDescriptor<any>
  ) {
    const originalMethod = descriptor.value!;
    const adjustedDescriptor: TypedPropertyDescriptor<any> = {
      configurable: true,
      get() {
        const boundFunction = originalMethod.bind(this);
        return boundFunction;
      },
    };
    return adjustedDescriptor;
  }
}
