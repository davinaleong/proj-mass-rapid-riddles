function func(name: string, params: any = {}): void {
  console.log(`fn ${name}(${JSON.stringify(params)})`)
}

export default func
