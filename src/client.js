import { createClient } from '@supabase/supabase-js'

const supabase = createClient('https://xancuuyabymhlrhtquao.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0Mzc4Njc4MSwiZXhwIjoxOTU5MzYyNzgxfQ.qCcYN64iC-uYTt1MvVbn9C0s8lY0TkCz1jATX-6kvjs')

export {
  supabase
}