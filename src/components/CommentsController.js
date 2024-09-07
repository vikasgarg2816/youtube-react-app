import React from 'react'

const Comment = ({data}) => {
    return(
        <div className='flex m-2 p-2 shadow-lg'>
         <img
             className='w-12 h-12'
             alt='user' src='https://th.bing.com/th/id/R.8e2c571ff125b3531705198a15d3103c?rik=gzhbzBpXBa%2bxMA&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fuser-png-icon-big-image-png-2240.png&ehk=VeWsrun%2fvDy5QDv2Z6Xm8XnIMXyeaz2fhR3AgxlvxAc%3d&risl=&pid=ImgRaw&r=0'>
         </img>   
         <div className='px-3'>
            <p className='font-bold'>{data.name}</p>
            <p>{data.text}</p>
         </div>
        </div>
    )
}


const CommentsData = ({comments}) => {
    return comments.map((comment)=>
                <div>
                    <Comment data={comment}/>
                    <div className='pl-2 border border-l-black ml-5'>
                        <CommentsData comments={comment.replies}/>
                    </div>
                </div>
            )
}


const commentsList = [
    {
        name: 'Vikas Garg',
        text: 'You have demonstrated remarkable skill in your role, consistently meeting the standards set for your role and position.',
        replies: [
            {
                name: 'Vikas Garg',
                text: 'You have demonstrated remarkable skill in your role, consistently meeting the standards set for your role and position.',
                replies: [   
                    {
                    name: 'Vikas Garg',
                    text: 'You have demonstrated remarkable skill in your role, consistently meeting the standards set for your role and position.',
                    replies: [
                        {
                            name: 'Vikas Garg',
                            text: 'You have demonstrated remarkable skill in your role, consistently meeting the standards set for your role and position.',
                            replies: []
                        },
                        {
                            name: 'Vikas Garg',
                            text: 'You have demonstrated remarkable skill in your role, consistently meeting the standards set for your role and position.',
                            replies: []
                        },
                        {
                            name: 'Vikas Garg',
                            text: 'You have demonstrated remarkable skill in your role, consistently meeting the standards set for your role and position.',
                            replies: [
                                {
                                    name: 'Vikas Garg',
                                    text: 'You have demonstrated remarkable skill in your role, consistently meeting the standards set for your role and position.',
                                    replies: [
                                        {
                                            name: 'Vikas Garg',
                                            text: 'You have demonstrated remarkable skill in your role, consistently meeting the standards set for your role and position.',
                                            replies: []
                                        },
                                        {
                                            name: 'Vikas Garg',
                                            text: 'You have demonstrated remarkable skill in your role, consistently meeting the standards set for your role and position.',
                                            replies: [
                                                {
                                                    name: 'Vikas Garg',
                                                    text: 'You have demonstrated remarkable skill in your role, consistently meeting the standards set for your role and position.',
                                                    replies: []
                                                },
                                            ]
                                        },
                                    ]
                                },
                            ]
                        },
                    ]
                    },
                ]
            },
            {
                name: 'Vikas Garg',
                text: 'You have demonstrated remarkable skill in your role, consistently meeting the standards set for your role and position.',
                replies: []
            },
        ]
    },
    {
        name : 'Vikas Garg',
        text : 'You have demonstrated remarkable skill in your role, consistently meeting the standards set for your role and position.',
        replies:[]
    },
    {
        name : 'Vikas Garg',
        text : 'You have demonstrated remarkable skill in your role, consistently meeting the standards set for your role and position.',
        replies:[]
    },
    {
        name: 'Vikas Garg',
        text: 'You have demonstrated remarkable skill in your role, consistently meeting the standards set for your role and position.',
        replies: []
    }    
]

const CommentsController = () => {
  return (
    <div className='m-2 p-2'>
        <h1 className='font-bold text-2xl m-2'>Comments:</h1>
        <CommentsData comments={commentsList}/>
    </div>
  )
}

export default CommentsController;