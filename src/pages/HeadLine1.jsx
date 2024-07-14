import {GoArrowLeft} from 'react-icons/go';
import { useNavigate } from 'react-router';

function Headline1Page() {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/articles');
  }

  return(
    <div className="bg-gray-100 h-full">
      <div className="mx-auto h-full max-w-5xl px-3 items-center bg-white">
        <div className='flex pt-20 px-1'>
          <div  style={{ width: '40px', height: '40px', borderRadius: '50%' }} onClick={handleClick} className='border cursor-pointer p-3 rounded-full flex shadow-lg items-center'>
            <GoArrowLeft className='mx-auto text-orange-600' />
          </div>
          <div className='flex ml-6 p-3 flex-col'>
            <p>March 12, 2024</p>
            <p className='mt-6 font-bold text-4xl'>How to NOT Be Broke in Your 20s</p>
            <img className='my-5 rounded-lg' src='https://images.pexels.com/photos/534229/pexels-photo-534229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='image1'/>
            <p className='text-gray-500'>Reflecting on my turbulent financial past, I'm motivated to share the key lessons that led me from a cycle of debt and poor credit to financial stability and a promising future. If I could sit down with my 20-year-old self, here's what I'd say. The foundation of financial freedom is understanding where your money goes. Start by jotting down every purchase, no matter how small, for a month. This eye-opening exercise will lay the groundwork for a budget that aligns with your actual needs and aspirations.Armed with insights from tracking your spending, draft a budget that prioritizes essentials while identifying areas where you can cut back. Remember, a budget isn't a restriction but a roadmap to financial freedom.Evaluate your spending habits and eliminate the non-essentials. Whether it's dining out less, finding more affordable entertainment, or resisting impulse buys, small changes can lead to significant savings.Look for opportunities to boost your earnings. Consider picking up extra shifts, freelancing, or pursuing a higher-paying job. Every extra dollar earned is a step closer to breaking the cycle of being broke.Invest time in learning about personal finance. Understanding credit, debt management, and the basics of investing can transform your financial outlook and equip you with the tools to build a stable future.Start with high-interest debt and work your way down. Consider strategies like debt consolidation or negotiating with creditors. Remember, freeing yourself from debt is possible with perseverance and a solid plan.Begin with a modest goal, perhaps $500 to $1,000, to cover unexpected expenses without derailing your financial progress. Eventually, aim for a fund that can sustain you for 3 to 6 months.Once you've established a foundation of financial stability, start planning for the future. Consider investing in a retirement account or exploring other investment opportunities to grow your wealth over time.By adhering to these principles, I transformed my financial situation from bleak to bright. It wasn't overnight, and it required discipline, but the outcome has been immeasurably rewarding. To my fellow 20-somethings navigating the complexities of personal finance, know that it's never too early or too late to start. Your future self will thank you.Remember, the journey to financial stability is a marathon, not a sprint. Patience, education, and consistent effort are your allies. By adopting these habits and mindsets, you can escape the cycle of being broke in your 20s and build a foundation for a prosperous future.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Headline1Page