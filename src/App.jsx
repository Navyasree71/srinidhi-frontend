export default function App(){
  const go = (id) => document.getElementById(id)?.scrollIntoView({behavior:'smooth'})

  return(
    <div style={{background:'#F6F1EB', color:'#1A1A1A', fontFamily:'Inter, sans-serif'}}>

      {/* NAV */}
      <div style={{position:'fixed', top:0, width:'100%', zIndex:50, display:'flex', justifyContent:'space-between', padding:'18px 50px', mixBlendMode:'difference', color:'white', fontSize:'11px', letterSpacing:'2px'}}>
        <b>SRINIDHI CONSTRUCTIONS</b>
        <div style={{display:'flex', gap:'30px'}}>
          <span onClick={()=>go('about')} style={{cursor:'pointer'}}>ABOUT</span>
          <span onClick={()=>go('works')} style={{cursor:'pointer'}}>WORKS</span>
          <span onClick={()=>go('services')} style={{cursor:'pointer'}}>SERVICES</span>
        </div>
      </div>

      {/* 1. HERO - like friend but your text */}
      <div style={{height:'100vh', position:'relative'}}>
        <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2000" style={{position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover'}}/>
        <div style={{position:'absolute', inset:0, background:'rgba(0,0,0,0.35)'}}></div>
        <div style={{position:'relative', zIndex:5, height:'100%', display:'flex', flexDirection:'column', justifyContent:'flex-end', padding:'0 70px 80px'}}>
          <p style={{color:'rgba(255,255,255,0.6)', fontSize:'10px', letterSpacing:'3px', marginBottom:'20px'}}>— ADILABAD • HYDERABAD • TELANGANA</p>
          <h1 style={{color:'white', fontSize:'72px', lineHeight:0.9, fontFamily:'serif', maxWidth:'650px'}}>
            We build homes <br/> that feel like <br/>
            <i style={{color:'#E8C9A0', fontWeight:400}}>you belong.</i>
          </h1>
          <p style={{color:'rgba(255,255,255,0.6)', maxWidth:'400px', fontSize:'13px', lineHeight:1.7, marginTop:'24px'}}>15+ years, 200+ families. Srinidhi Constructions builds strong, vaastu-perfect, beautiful homes that last generations.</p>
          <div onClick={()=>go('works')} style={{marginTop:'30px', background:'#F6F1EB', color:'black', padding:'16px 28px', fontSize:'11px', letterSpacing:'2px', width:'fit-content', cursor:'pointer'}}>SEE OUR HOMES →</div>
        </div>
      </div>

      {/* 2. ABOUT - Good spaces section IDEA */}
      <div id="about" style={{padding:'120px 70px', display:'flex', justifyContent:'space-between'}}>
        <div style={{width:'50%'}}>
          <p style={{fontSize:'10px', letterSpacing:'3px', opacity:0.5}}>— WHY FAMILIES CHOOSE US</p>
          <h2 style={{fontSize:'64px', fontFamily:'serif', lineHeight:0.95, marginTop:'20px'}}>
            Strong foundation, <br/> beautiful <br/>
            <i style={{color:'#B78A65'}}>finishing.</i>
          </h2>
        </div>
        <div style={{width:'380px', marginTop:'80px'}}>
          <p style={{fontSize:'14px', lineHeight:1.9, opacity:0.6}}>We don't rush. We listen to your budget, your family needs, your land. Then we plan every brick with care. No hidden costs, no delays. Just honest building.</p>
          <div style={{display:'flex', gap:'40px', marginTop:'40px', borderTop:'1px solid #DDD', paddingTop:'20px'}}>
            <div><p style={{fontFamily:'serif', fontSize:'28px'}}>200+</p><p style={{fontSize:'9px', opacity:0.5, letterSpacing:'1px'}}>HOMES BUILT</p></div>
            <div><p style={{fontFamily:'serif', fontSize:'28px'}}>15+</p><p style={{fontSize:'9px', opacity:0.5, letterSpacing:'1px'}}>YEARS</p></div>
            <div><p style={{fontFamily:'serif', fontSize:'28px'}}>4.9★</p><p style={{fontSize:'9px', opacity:0.5, letterSpacing:'1px'}}>RATING</p></div>
          </div>
        </div>
      </div>

      {/* 3. PHILOSOPHY - Built with intention IDEA */}
      <div style={{padding:'0 70px 100px', display:'flex', gap:'70px'}}>
        <div style={{flex:1, display:'flex', flexDirection:'column', gap:'40px'}}>
          <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000" style={{width:'100%', height:'520px', objectFit:'cover'}}/>
          <img src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=1000" style={{width:'100%', height:'380px', objectFit:'cover'}}/>
        </div>
        <div style={{width:'420px', position:'sticky', top:'120px', height:'fit-content'}}>
          <h2 style={{fontSize:'56px', fontFamily:'serif', lineHeight:0.9}}>Homes built <br/><i style={{color:'#B78A65'}}>for life.</i></h2>
          <p style={{fontSize:'13px', lineHeight:1.8, opacity:0.6, marginTop:'30px'}}>Sunlight in the morning, cool breeze in evening. We design for Telangana climate. Strong RCC, best cement, proper curing - so your home stays strong 50+ years.</p>
          <p onClick={()=>go('services')} style={{fontSize:'11px', letterSpacing:'2px', marginTop:'50px', borderBottom:'1px solid black', width:'fit-content', paddingBottom:'6px', cursor:'pointer'}}>HOW WE BUILD →</p>
        </div>
      </div>

      {/* 4. WORKS - Projects grid IDEA */}
      <div id="works" style={{padding:'80px 70px', background:'white'}}>
        <div style={{display:'flex', justifyContent:'space-between', marginBottom:'50px'}}>
          <p style={{fontSize:'10px', letterSpacing:'3px', opacity:0.5}}>— SELECTED HOMES</p>
          <p style={{fontSize:'11px', opacity:0.5}}>ADILABAD / HYD 2020-2025</p>
        </div>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'50px'}}>
          {[
            {n:'01', t:'Independent Villa - Adilabad', img:'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800'},
            {n:'02', t:'2BHK Budget Home - Nirmal', img:'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=800'},
            {n:'03', t:'Duplex House - Hyderabad', img:'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800'},
            {n:'04', t:'Farmhouse - Luxurious', img:'https://images.unsplash.com/photo-1600573472550-8090b5e0745b?q=80&w=800'},
          ].map(p=>(
            <div key={p.n}>
              <img src={p.img} style={{width:'100%', height:'460px', objectFit:'cover'}}/>
              <div style={{display:'flex', justifyContent:'space-between', marginTop:'12px'}}>
                <p style={{fontFamily:'serif', fontSize:'15px'}}>{p.t}</p><p style={{fontSize:'11px', opacity:0.4}}>{p.n}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5. SERVICES - Black section IDEA */}
      <div id="services" style={{background:'#111', color:'#F6F1EB', padding:'100px 70px'}}>
        <h2 style={{fontSize:'64px', fontFamily:'serif', lineHeight:0.9}}>From plan to <br/><i style={{color:'#B78A65'}}>key handover.</i></h2>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:'40px', marginTop:'80px', borderTop:'1px solid rgba(255,255,255,0.1)', paddingTop:'50px'}}>
          <div><p style={{fontSize:'11px', letterSpacing:'2px', marginBottom:'12px'}}>01 — RESIDENTIAL</p><p style={{fontSize:'13px', opacity:0.5, lineHeight:1.7}}>Independent houses, duplex, villas. Vaastu planning, 3D design, estimation.</p></div>
          <div><p style={{fontSize:'11px', letterSpacing:'2px', marginBottom:'12px'}}>02 — COMMERCIAL</p><p style={{fontSize:'13px', opacity:0.5, lineHeight:1.7}}>Shops, offices, complexes. Strong structure, fast completion.</p></div>
          <div><p style={{fontSize:'11px', letterSpacing:'2px', marginBottom:'12px'}}>03 — RENOVATION</p><p style={{fontSize:'13px', opacity:0.5, lineHeight:1.7}}>Old home makeover, extensions, interior finishing with premium materials.</p></div>
        </div>
        <div style={{marginTop:'60px', background:'#F6F1EB', color:'black', padding:'18px 30px', width:'fit-content', fontSize:'11px', letterSpacing:'2px', cursor:'pointer'}} onClick={()=>window.open('https://wa.me/91YOURNUMBER','_blank')}>
          GET FREE ESTIMATE →
        </div>
      </div>

      {/* 6. QUOTE - Last section */}
      <div style={{padding:'100px 70px', display:'flex', gap:'70px', alignItems:'center'}}>
        <img src="https://images.unsplash.com/photo-1600210491369-e753577c0b81?q=80&w=900" style={{width:'55%', height:'580px', objectFit:'cover'}}/>
        <div style={{width:'40%'}}>
          <h2 style={{fontSize:'48px', fontFamily:'serif', lineHeight:0.9}}>A home is more <br/> than walls and <br/><i style={{color:'#B78A65'}}>roof.</i></h2>
          <p style={{marginTop:'30px', fontSize:'14px', lineHeight:1.8, opacity:0.6, fontStyle:'italic'}}>“We build memories. The place where your children will grow, festivals will happen, and peace lives every day.”</p>
          <p style={{marginTop:'20px', fontSize:'11px', letterSpacing:'2px', opacity:0.4}}>— SRINIDHI CONSTRUCTIONS, EST. 2010</p>
        </div>
      </div>

      <div style={{background:'#111', color:'rgba(255,255,255,0.4)', padding:'30px 70px', display:'flex', justifyContent:'space-between', fontSize:'10px', letterSpacing:'2px'}}>
        <span>© 2025 SRINIDHI CONSTRUCTIONS</span><span>ADILABAD • HYDERABAD</span>
      </div>
    </div>
  )
}