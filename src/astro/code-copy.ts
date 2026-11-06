for (const pre of document.querySelectorAll<HTMLPreElement>('pre')) {
  const code = pre.querySelector('code')
  if (!code || pre.closest('[data-no-copy]')) continue
  const wrapper = document.createElement('div')
  wrapper.className = 'rb-code-block'
  pre.before(wrapper)
  wrapper.append(pre)
  const button = document.createElement('button')
  button.type = 'button'
  button.className = 'rb-code-copy'
  button.textContent = 'Copy code'
  const status = document.createElement('span')
  status.className = 'visually-hidden'
  status.setAttribute('role', 'status')
  wrapper.append(button, status)
  let reset: ReturnType<typeof setTimeout> | undefined
  button.addEventListener('click', async () => {
    clearTimeout(reset)
    try {
      await navigator.clipboard.writeText(code.textContent ?? '')
      button.textContent = 'Copied'
      status.textContent = 'Code copied to clipboard.'
    } catch {
      const range = document.createRange()
      range.selectNodeContents(code)
      const selection = window.getSelection()
      selection?.removeAllRanges()
      selection?.addRange(range)
      button.textContent = 'Select and copy'
      status.textContent =
        'Clipboard unavailable. Code selected for manual copying.'
    }
    reset = setTimeout(() => {
      button.textContent = 'Copy code'
      status.textContent = ''
    }, 3000)
  })
}
