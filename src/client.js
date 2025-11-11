import { createClient } from '@supabase/supabase-js'

const URL = 'https://vddrosrhrtvhtcadbxnl.supabase.co'
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZkZHJvc3JocnR2aHRjYWRieG5sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI4MTc4NjcsImV4cCI6MjA3ODM5Mzg2N30.uumK2EUX-A4TgqLVU1fEProb7J26muq-ZyglRVIyz3E'

export const supabase = createClient(URL, API_KEY)

