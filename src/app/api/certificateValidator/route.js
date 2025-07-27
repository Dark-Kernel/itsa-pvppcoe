import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY)

export async function POST(request) {

    const key = await request.json()

    const { data, error } = await supabase
        .from('certificates')
        .select('*')
        .eq('code', key.key)
        .single()

    if(error) {
        if(error.code == 'PGRST116'){
            return NextResponse.json({ valid: false }, { status: 400 })
        }
        return NextResponse.json({ error: error.message }, { status: 400 })
    }

    if (data) {
        return NextResponse.json({ valid: true, data: data })
    }

    return NextResponse.json({ valid: false })
}

// Example curl request to invoke above function: 
// curl -X POST -H "Content-Type: application/json" -d '{"key": "123456789012"}' http://localhost:3000/api/certificateValidator
