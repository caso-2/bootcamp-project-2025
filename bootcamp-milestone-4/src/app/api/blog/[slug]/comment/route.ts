import { NextRequest, NextResponse } from 'next/server'
import connectDB from "@/database/db"
import blogSchema from "@/database/blogSchema"
import Blog from '@/database/blogSchema'
import { error } from 'console'

/* IParams is a TypeScript type definition that describes the structure of the second
   argument that Next.js passes to our API route handler.

   Without IParams:
   - TypeScript wouldn't know what properties the second argument contains
   - We'd lose autocomplete and type checking
   - Typos like { slug } vs { slg } wouldn't be caught until runtime

   With IParams:
   - TypeScript knows the second argument has a "params" object
   - TypeScript knows "params" contains a "slug" property that's a string
   - We get autocomplete when typing { params } and { slug }
   - TypeScript catches errors if we try to access non-existent properties

   Note: IParams doesn't control what Next.js creates - it just tells TypeScript
   what to expect. The actual object structure is determined by our file path:
   /api/blog/[slug]/route.ts creates { params: { slug: "actual-slug-value" } }
*/
type IParams = {
        params: {
            slug: string
        }
}

export async function POST(req: NextRequest, { params }: IParams) {
	const body = await req.json()
	const { slug } = params
    
	// validate body
    if (!body.user || !body.comment || !body.date) {
        return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }
	
	// push comment object to document
    await connectDB()
    try {
        const blog = await Blog.findOneAndUpdate(
            {slug: slug},
            {
                $push: {
                    comments: {
                        user: body.user,
                        comment: body.comment,
                        date: new Date()
                    }, 
                },
            },
            {
                upsert: true
            }
        ).exec()

        if (!blog) {
            return NextResponse.json({error: 'Blog not found' }, { status: 404})
        }
        return NextResponse.json('Comment added successfully', {status: 201})
    }
    catch (ex) {
        console.error(ex)
        return NextResponse.json({error: 'Server error'}, { status: 500})
    }

}