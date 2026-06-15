import { getFormString, optionalField } from '../utils/formData'

describe('formData helpers', () => {
  it('returns trimmed form string', () => {
    const form = new FormData()
    form.set('name', '  Nina  ')

    expect(getFormString(form, 'name')).toBe('Nina')
  })

  it('returns empty string when key is missing', () => {
    expect(getFormString(new FormData(), 'name')).toBe('')
  })

  it('returns undefined for empty optional field', () => {
    expect(optionalField('   ')).toBeUndefined()
  })

  it('returns trimmed optional field', () => {
    expect(optionalField('  abc123  ')).toBe('abc123')
  })

  it('returns undefined for non-string optional field', () => {
    const file = new File(['x'], 'x.txt')

    expect(optionalField(file)).toBeUndefined()
  })
})
