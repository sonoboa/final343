import Link from 'next/link'

export default function Menubar() {
    return (
      <>
        <ul>
          
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <a href='https://expense-new-five.vercel.app/' target='_blank'>Midterm Part I - Expense</a>
          </li>
          <li>
            <a href='https://website-exam-part-2-smoky.vercel.app/' target='_blank'>Midterm Part II Site</a>
          </li>
        <li>
         <Link href='/faq'>FAQ</Link>
        </li>
               
                </ul>
      </>
    )
  }