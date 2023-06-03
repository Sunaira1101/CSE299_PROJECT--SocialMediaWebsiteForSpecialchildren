import "./book.css"
import React, { useState } from 'react'

const Book = () => {
    const [bookcards] = useState([
        {
            title: 'That is Not My Kitten…touchy-feely books by Usbourne.',
            pic: 'https://cdn.shopify.com/s/files/1/0909/1354/files/That_sNotMy_large.jpg?v=1553080915',
            text: 'These books are fantastic for both young children and children with developmental delays. The repetitive nature of the book makes it easy to follow and each page brings a new sensory experience with a different material to feel – be it smooth, fuzzy, bumpy, shiny or even squishy. The pages are glossy, bright and colourful and there are so many versions of the book, you are bound to find one that your child will love. Because they are boardbooks, they are also not quite as easy for children to bend and break.',
            href: 'https://a.co/d/hwuulkE'
        },
        {
            title: 'Captain Underpants Books, Dav Pilkey',
            pic: 'https://cdn.shopify.com/s/files/1/0909/1354/files/cptunderpants_large.jpg?v=1553080861',
            text: 'If your child has ADHD (Attention Deficit Hyperactivity Disorder), they may enjoy the Captain Underpants books by Dav Pilkey.Dav  has a diagnosis of ADHD and Dyslexia and Captain Underpants was developed when he was a child and had a passion for drawing cartoons and supportive parents who encouraged his talent.The two main characters in the books, two young boys called George and Harold, have ADHD and it is fantastic how Dav has managed to put some of his own experiences and challenges into the book to bring the characters to life.',
            href: 'https://a.co/d/hwuulkE'
        },
        {
            title: 'Goodbye Daisy, Stephanie Nimmo',
            pic: 'https://cdn.shopify.com/s/files/1/0909/1354/files/goodbyedaisy_large.jpg?v=1553080875',
            text: 'Goodbye Daisy is a book aimed at children with learning disabilities to support them with bereavement.In 2017, Stephanie Nimmo’s daugher Daisy sadly passed away and following Daisy’s death, Stephanie wanted to write a book to help support children with learning disabilities who are grieving somebody close to them who has died.A lot of learning disabled children may find it difficult to articulate and process feelings of loss and may not have the words to describe how they are feeling.',
            href: 'https://a.co/d/hwuulkE'
        },
        {
            title: 'The Forgotten Forest, Victoria Richards',
            pic: 'https://cdn.shopify.com/s/files/1/0909/1354/files/forgottenforest_large.jpg?v=1553080846',
            text: 'This book is described as a diverse and inclusive personalised picture book – and that’s exactly what it is! Your child becomes the hero in this beautifully illustrated story, solving clues along the way to find the key to break a spell which has caused a perpetual winter in the forest and returns light, love and laughter.When ordering, you can choose from 8 skin tones, 6 eye colours, 12 hairstyles and 25 hair colours. The character can wear ear defenders, a hearing aid, glasses or have a wheelchair. In addition, the author makes no assumptions about gender, offering a choice of pronouns beyond ‘he’ or ‘she’.',
            href: 'https://a.co/d/hwuulkE'
        }
        
    ])


  return (
    <div className="book">
      <section className="bsec">
        <div className="bookcontainer">
        
            <h1 className="bookname">Books For Your Child</h1>
            <button className="addbook">Add Books</button>
            <div className="bookcards">
                {
                    bookcards.map((bcard, i) => (

                        <div key={i} className="bookcard">
                            <h3 className="bookcardname">{bcard.title}</h3>
                            <img className="bpiccard" src={bcard.pic} alt="" />
                            <span className="booktext">{bcard.text}</span>
                            <a className="blink" href={bcard.href}>BUY NOW</a>
                            {/* <button className="bookcardbtn">Explore</button> */}
                        </div>

                    ))
                }
                
            </div>

        </div>
      </section>
    </div>
  )
}

export default Book
