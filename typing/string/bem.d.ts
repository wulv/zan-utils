interface IBemOptions {
    prefix?: string;
    block: string;
    elementPrefix?: string;
    modifierPrefix?: string;
}
declare function bem({ prefix, block, elementPrefix, modifierPrefix }: IBemOptions): (element?: string, modifier?: string, utils?: string) => string;
export default bem;
//# sourceMappingURL=bem.d.ts.map