import { Button } from "@/components/Button";
import starbg from "@/assets/stars.png"

export const Hero = () => {
  return(
  <section 
    className="h-[492px] md:h-[800px] flex items-center overflow-hidden relative [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]" 
    style={{
      backgroundImage: `url(${starbg.src})`
    }}>
      <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,white,rgb(140,69,255,.5)_15%,rgb(14,0,36,.5)_78%)]"></div>
      {/* Start Planet */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:size-96 size-64 rounded-full bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))] shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_-20px_80px_rgb(255,255,255,.1),0_0_50px_rgb(140,69,255)]"></div>
      {/* End Planet */}
      {/* Start Ring 1 */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:size-[580px] size-[344px] opacity-20 rounded-full border">
        <div className="absolute size-2 bg-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute size-2 bg-white rounded-full top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute size-5 border border-white rounded-full right-0 top-1/2 translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center">
          <div className="absolute size-2 bg-white rounded-full"></div>
        </div>
      </div>
      {/* End Ring 1 */}
      {/* Start Ring 2 */}
      <div className="absolute size-[444px] md:size-[780px] border border-white/20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-dashed"></div>
      {/* End Ring 2 */}
      {/* Start Ring 3 */}
      <div className="absolute size-[544px] md:size-[980px] border border-white opacity-20 rounded-full left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
        <div className="absolute size-2 bg-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute size-2 bg-white rounded-full top-1/2 right-0 translate-x-1/2 -translate-y-1/2"></div>
      </div>
      {/* End Ring 3 */}
      <div className="container relative">
        
        <h1 className="text-8xl md:text-[168px] font-semibold tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] text-transparent bg-clip-text text-center mt-16">AI SEO</h1>
        
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-white/70 mt-5 text-center">Elevate your site’s visibility effortlessly with AI, where smart technology meets user-friendly SEO tools.</p>
        
        <div className="flex justify-center mt-5">
          <Button>Join Waitlist</Button>
        </div>
        
      </div>

  </section>
  );
};
