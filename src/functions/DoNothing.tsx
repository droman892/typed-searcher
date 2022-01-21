export const DoNothing = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    console.log('DoNothing wrote this')
}
