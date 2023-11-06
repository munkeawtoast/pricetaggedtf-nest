import type { Config } from 'drizzle-kit'

const config: Config = {
  schema: './src/database/schema.ts',
  out: './drizzle',
}

export default config
