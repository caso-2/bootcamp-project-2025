import { NextRequest, NextResponse } from 'next/server'
import connectDB from "@/database/db"
import portfolioCommentSchema from "@/database/portfolioCommentSchema"
import Comment from '@/database/portfolioCommentSchema'
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

export async function POST(req: NextRequest) {
	const body = await req.json()
    
	// validate body
    if (!body.user || !body.comment || !body.date) {
        return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }
	
	// push comment object to document
    await connectDB()
    try {
        const comment = await Comment.insertOne({
            user: body.user,
            comment: body.comment,
            date: new Date()
        }
        )              

        if (!comment) {
            return NextResponse.json({error: 'Database error' }, { status: 404})
        }
        console.log(comment.insertedId)
        console.log(comment.acknowledged)
        return NextResponse.json('Comment added successfully', {status: 201})
    }
    catch (ex) {
        console.error(ex)
        return NextResponse.json({error: 'Server error'}, { status: 500})
    }

}