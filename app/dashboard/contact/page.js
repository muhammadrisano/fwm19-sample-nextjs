'use client'
import React from 'react'
import { useRef, useEffect } from 'react'
import {Base} from '@/components'

const ContactPage = () => {
const myRef = useRef(null)

const handleNavigate = ()=>{
    myRef.current.scrollIntoView()    
}
useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then((res)=>res.json())
    .then((res)=>{
        console.log(res);
    })
}, [])
  return (
    <div>
        <button onClick={handleNavigate}>ke bawah</button>
        <h1>halaman contact</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore voluptatem eius nam libero blanditiis ipsa molestiae modi architecto facilis non corrupti animi aliquam, praesentium repellendus dignissimos nobis aperiam atque sunt iusto, porro fugit delectus, omnis enim! Aspernatur reprehenderit sequi ad suscipit repudiandae fuga vero praesentium sint architecto velit, voluptatibus animi accusantium soluta eum quaerat error quidem dolore quas inventore totam amet dolorum! Hic fugit excepturi incidunt pariatur architecto vero tenetur mollitia provident labore atque expedita quas voluptate, ab quos! Explicabo velit quaerat rerum saepe et ducimus, odio sequi minima, sed ipsum repudiandae aperiam labore nam! Iste placeat explicabo harum tempore assumenda modi, provident vero, inventore maiores sequi sunt dolores perferendis ab voluptates rerum perspiciatis. Explicabo quidem voluptate deserunt, doloremque omnis minima, esse labore distinctio mollitia voluptatibus quibusdam enim ipsam sint repellat quisquam, modi delectus aperiam? Deleniti eos omnis harum vel, non cumque, fugiat autem, praesentium animi ut dolore hic corrupti id sint necessitatibus rerum voluptatem recusandae sit provident eum aliquid reprehenderit alias. Voluptatum ducimus praesentium, facilis ipsam voluptate natus aspernatur nobis nihil in pariatur dolorum iure dignissimos repellendus unde illum explicabo at hic accusantium nesciunt dolor itaque beatae facere dolores? Nemo eum quibusdam, repudiandae sunt aperiam aspernatur doloribus voluptas architecto fugiat. Maiores praesentium, assumenda eos facilis, eligendi fuga illum distinctio odit molestiae, a aut architecto exercitationem reprehenderit. Reiciendis, ipsam voluptatibus totam quidem dicta, tempora cumque expedita commodi placeat, deserunt quaerat neque? Veritatis qui enim repellat neque nulla, officia aperiam a, dolorem voluptate excepturi accusamus sint dolor atque incidunt officiis quia! Dolorem et sunt perspiciatis aperiam natus consequuntur soluta beatae unde nesciunt excepturi! Nulla cumque dolorem laboriosam. Facere sed reprehenderit minus voluptatibus eos ipsam numquam, pariatur dolores vitae ea voluptate praesentium totam repudiandae autem minima vero atque nihil explicabo aliquam quasi molestiae? Laboriosam possimus veritatis facere cupiditate cum iure quisquam recusandae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore voluptatem eius nam libero blanditiis ipsa molestiae modi architecto facilis non corrupti animi aliquam, praesentium repellendus dignissimos nobis aperiam atque sunt iusto, porro fugit delectus, omnis enim! Aspernatur reprehenderit sequi ad suscipit repudiandae fuga vero praesentium sint architecto velit, voluptatibus animi accusantium soluta eum quaerat error quidem dolore quas inventore totam amet dolorum! Hic fugit excepturi incidunt pariatur architecto vero tenetur mollitia provident labore atque expedita quas voluptate, ab quos! Explicabo velit quaerat rerum saepe et ducimus, odio sequi minima, sed ipsum repudiandae aperiam labore nam! Iste placeat explicabo harum tempore assumenda modi, provident vero, inventore maiores sequi sunt dolores perferendis ab voluptates rerum perspiciatis. Explicabo quidem voluptate deserunt, doloremque omnis minima, esse labore distinctio mollitia voluptatibus quibusdam enim ipsam sint repellat quisquam, modi delectus aperiam? Deleniti eos omnis harum vel, non cumque, fugiat autem, praesentium animi ut dolore hic corrupti id sint necessitatibus rerum voluptatem recusandae sit provident eum aliquid reprehenderit alias. Voluptatum ducimus praesentium, facilis ipsam voluptate natus aspernatur nobis nihil in pariatur dolorum iure dignissimos repellendus unde illum explicabo at hic accusantium nesciunt dolor itaque beatae facere dolores? Nemo eum quibusdam, repudiandae sunt aperiam aspernatur doloribus voluptas architecto fugiat. Maiores praesentium, assumenda eos facilis, eligendi fuga illum distinctio odit molestiae, a aut architecto exercitationem reprehenderit. Reiciendis, ipsam voluptatibus totam quidem dicta, tempora cumque expedita commodi placeat, deserunt quaerat neque? Veritatis qui enim repellat neque nulla, officia aperiam a, dolorem voluptate excepturi accusamus sint dolor atque incidunt officiis quia! Dolorem et sunt perspiciatis aperiam natus consequuntur soluta beatae unde nesciunt excepturi! Nulla cumque dolorem laboriosam. Facere sed reprehenderit minus voluptatibus eos ipsam numquam, pariatur dolores vitae ea voluptate praesentium totam repudiandae autem minima vero atque nihil explicabo aliquam quasi molestiae? Laboriosam possimus veritatis facere cupiditate cum iure quisquam recusandae!</p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore voluptatem eius nam libero blanditiis ipsa molestiae modi architecto facilis non corrupti animi aliquam, praesentium repellendus dignissimos nobis aperiam atque sunt iusto, porro fugit delectus, omnis enim! Aspernatur reprehenderit sequi ad suscipit repudiandae fuga vero praesentium sint architecto velit, voluptatibus animi accusantium soluta eum quaerat error quidem dolore quas inventore totam amet dolorum! Hic fugit excepturi incidunt pariatur architecto vero tenetur mollitia provident labore atque expedita quas voluptate, ab quos! Explicabo velit quaerat rerum saepe et ducimus, odio sequi minima, sed ipsum repudiandae aperiam labore nam! Iste placeat explicabo harum tempore assumenda modi, provident vero, inventore maiores sequi sunt dolores perferendis ab voluptates rerum perspiciatis. Explicabo quidem voluptate deserunt, doloremque omnis minima, esse labore distinctio mollitia voluptatibus quibusdam enim ipsam sint repellat quisquam, modi delectus aperiam? Deleniti eos omnis harum vel, non cumque, fugiat autem, praesentium animi ut dolore hic corrupti id sint necessitatibus rerum voluptatem recusandae sit provident eum aliquid reprehenderit alias. Voluptatum ducimus praesentium, facilis ipsam voluptate natus aspernatur nobis nihil in pariatur dolorum iure dignissimos repellendus unde illum explicabo at hic accusantium nesciunt dolor itaque beatae facere dolores? Nemo eum quibusdam, repudiandae sunt aperiam aspernatur doloribus voluptas architecto fugiat. Maiores praesentium, assumenda eos facilis, eligendi fuga illum distinctio odit molestiae, a aut architecto exercitationem reprehenderit. Reiciendis, ipsam voluptatibus totam quidem dicta, tempora cumque expedita commodi placeat, deserunt quaerat neque? Veritatis qui enim repellat neque nulla, officia aperiam a, dolorem voluptate excepturi accusamus sint dolor atque incidunt officiis quia! Dolorem et sunt perspiciatis aperiam natus consequuntur soluta beatae unde nesciunt excepturi! Nulla cumque dolorem laboriosam. Facere sed reprehenderit minus voluptatibus eos ipsam numquam, pariatur dolores vitae ea voluptate praesentium totam repudiandae autem minima vero atque nihil explicabo aliquam quasi molestiae? Laboriosam possimus veritatis facere cupiditate cum iure quisquam recusandae!
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore voluptatem eius nam libero blanditiis ipsa molestiae modi architecto facilis non corrupti animi aliquam, praesentium repellendus dignissimos nobis aperiam atque sunt iusto, porro fugit delectus, omnis enim! Aspernatur reprehenderit sequi ad suscipit repudiandae fuga vero praesentium sint architecto velit, voluptatibus animi accusantium soluta eum quaerat error quidem dolore quas inventore totam amet dolorum! Hic fugit excepturi incidunt pariatur architecto vero tenetur mollitia provident labore atque expedita quas voluptate, ab quos! Explicabo velit quaerat rerum saepe et ducimus, odio sequi minima, sed ipsum repudiandae aperiam labore nam! Iste placeat explicabo harum tempore assumenda modi, provident vero, inventore maiores sequi sunt dolores perferendis ab voluptates rerum perspiciatis. Explicabo quidem voluptate deserunt, doloremque omnis minima, esse labore distinctio mollitia voluptatibus quibusdam enim ipsam sint repellat quisquam, modi delectus aperiam? Deleniti eos omnis harum vel, non cumque, fugiat autem, praesentium animi ut dolore hic corrupti id sint necessitatibus rerum voluptatem recusandae sit provident eum aliquid reprehenderit alias. Voluptatum ducimus praesentium, facilis ipsam voluptate natus aspernatur nobis nihil in pariatur dolorum iure dignissimos repellendus unde illum explicabo at hic accusantium nesciunt dolor itaque beatae facere dolores? Nemo eum quibusdam, repudiandae sunt aperiam aspernatur doloribus voluptas architecto fugiat. Maiores praesentium, assumenda eos facilis, eligendi fuga illum distinctio odit molestiae, a aut architecto exercitationem reprehenderit. Reiciendis, ipsam voluptatibus totam quidem dicta, tempora cumque expedita commodi placeat, deserunt quaerat neque? Veritatis qui enim repellat neque nulla, officia aperiam a, dolorem voluptate excepturi accusamus sint dolor atque incidunt officiis quia! Dolorem et sunt perspiciatis aperiam natus consequuntur soluta beatae unde nesciunt excepturi! Nulla cumque dolorem laboriosam. Facere sed reprehenderit minus voluptatibus eos ipsam numquam, pariatur dolores vitae ea voluptate praesentium totam repudiandae autem minima vero atque nihil explicabo aliquam quasi molestiae? Laboriosam possimus veritatis facere cupiditate cum iure quisquam recusandae!
        </p>
        <div ref={myRef}>
            <p>scroll kesini</p>
        </div>
        <Base.Button.Basic title="helo" onClick={()=>alert('helo')}/>
    </div>
  )
}

export default ContactPage