type Screen = 'home' | 'list' | 'recipe' | 'deals' | 'campaigns'

const tabs = [
  { id: 'home', label: 'Inicio' },
  { id: 'lists', label: 'Listas' },
  { id: 'recipes', label: 'Recetas' },
  { id: 'deals', label: 'Ofertas' },
  { id: 'qr', label: 'QR' },
] as const

function Icon({ name, active = false }: { name: string; active?: boolean }) {
  const stroke = active ? '#1d6fe8' : '#8b938c'
  const common = { fill: 'none', stroke, strokeWidth: 1.6, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }
  if (name === 'home') {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
        <path {...common} d="M4 11.5 12 5l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1z" />
      </svg>
    )
  }
  if (name === 'lists') {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
        <path {...common} d="M8 7h11M8 12h11M8 17h11M4.5 7h.5M4.5 12h.5M4.5 17h.5" />
      </svg>
    )
  }
  if (name === 'recipes') {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
        <path {...common} d="M6 4.5h9.5A2.5 2.5 0 0 1 18 7v12.5H8.5A2.5 2.5 0 0 0 6 17z" />
        <path {...common} d="M6 4.5A2.5 2.5 0 0 0 8.5 7H18" />
      </svg>
    )
  }
  if (name === 'deals') {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
        <path {...common} d="M4.5 12.5 12 5h6.5v6.5L11 19.5z" />
        <circle cx="16.2" cy="8.2" r="1" fill={stroke} stroke="none" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
      <path {...common} d="M5 5h5v5H5zM14 5h5v5h-5zM5 14h5v5H5zM14 14h2.2v2.2H14zM18 16.8V19h-2.2" />
    </svg>
  )
}

function TabBar({ active }: { active: (typeof tabs)[number]['id'] }) {
  return (
    <div className="grid grid-cols-5 border-t border-[#e6e8e6] bg-white px-1 py-1.5">
      {tabs.map((tab) => {
        const on = tab.id === active
        return (
          <div key={tab.id} className="flex flex-col items-center gap-0.5">
            <Icon name={tab.id} active={on} />
            <span className={`text-[8px] leading-none ${on ? 'font-semibold text-[#1d6fe8]' : 'text-[#8b938c]'}`}>{tab.label}</span>
          </div>
        )
      })}
    </div>
  )
}

function BrandBar() {
  return (
    <div className="flex items-center justify-between px-3 pb-2 pt-3">
      <div className="flex items-center gap-1.5">
        <span className="grid h-6 w-6 place-items-center rounded-md bg-[#1d6fe8] text-[11px] font-bold text-white">S</span>
        <span className="text-[12px] font-semibold tracking-tight text-[#13200f]">
          SmartList<span className="text-[#1d6fe8]">.AI</span>
        </span>
      </div>
      <div className="flex items-center gap-2 text-[#5b6b5e]">
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden>
          <path fill="none" stroke="currentColor" strokeWidth="1.6" d="M6 16.5h12l-1.2-2.1V10a4.8 4.8 0 1 0-9.6 0v4.4z" />
          <path fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" d="M10 18.2a2 2 0 0 0 4 0" />
        </svg>
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden>
          <path fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" d="M5 7h14M5 12h14M5 17h14" />
        </svg>
      </div>
    </div>
  )
}

function CheckRow({ name, qty }: { name: string; qty: string }) {
  return (
    <div className="flex items-center gap-2 border-b border-[#eef1ee] px-3 py-2">
      <span className="h-4 w-4 shrink-0 rounded-full border-2 border-[#c9d0cb]" />
      <div className="min-w-0 flex-1">
        <p className="truncate text-[11px] font-medium text-[#13200f]">{name}</p>
        <p className="text-[9px] text-[#6b766e]">{qty}</p>
      </div>
      <span className="rounded-md bg-[#eef1ee] px-1.5 py-1 text-[9px] font-semibold text-[#6b766e]">R$ --</span>
    </div>
  )
}

function HomeScreen() {
  return (
    <div className="flex h-full flex-col bg-white">
      <BrandBar />
      <div className="min-h-0 flex-1 space-y-2.5 overflow-hidden px-3">
        <p className="text-[15px] font-semibold tracking-tight text-[#13200f]">Hola, Gonzalo</p>
        <div className="grid grid-cols-2 gap-1.5">
          <div className="rounded-lg bg-[#1d6fe8] px-2 py-2 text-center text-[10px] font-semibold text-white">+ Nueva lista</div>
          <div className="rounded-lg border border-[#d7e0d3] px-2 py-2 text-center text-[10px] font-medium text-[#13200f]">Recetas</div>
        </div>
        <div className="rounded-lg border border-[#d7e0d3] px-2 py-2 text-center text-[10px] font-medium text-[#13200f]">Mis gastos</div>
        <div className="overflow-hidden rounded-xl bg-[linear-gradient(135deg,#16351f,#2f6b34)] p-3 text-white">
          <p className="text-[8px] uppercase tracking-[0.14em] text-white/70">Oferta de la semana</p>
          <p className="mt-1 text-[13px] font-semibold leading-tight">Cortes frescos.<br />Buen precio.</p>
          <div className="mt-2 flex gap-1.5">
            {['Picanha', 'Molida', 'Pollo'].map((item) => (
              <div key={item} className="flex-1 rounded-md bg-white/15 px-1 py-1.5 text-center">
                <span className="mx-auto mb-1 block h-4 w-6 rounded-sm bg-[#d7f08a]" />
                <span className="text-[8px]">{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-3 rounded-xl border border-[#e6e8e6] py-2 text-center">
          {[
            ['10', 'Listas'],
            ['9', 'Hechas'],
            ['130', 'Ítems'],
          ].map(([value, label]) => (
            <div key={label}>
              <p className="text-[13px] font-semibold text-[#13200f]">{value}</p>
              <p className="text-[8px] text-[#6b766e]">{label}</p>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <p className="text-[12px] font-semibold text-[#13200f]">Ofertas</p>
          <p className="text-[9px] font-semibold text-[#1d6fe8]">Ver todas</p>
        </div>
        <div className="grid grid-cols-3 gap-1.5">
          {[
            ['Jugo', '-13%'],
            ['Helado', '-20%'],
            ['Pan', '-8%'],
          ].map(([name, off]) => (
            <div key={name} className="rounded-lg border border-[#e6e8e6] p-1.5">
              <div className="mb-1 h-8 rounded-md bg-[#f3f6e8]" />
              <p className="text-[8px] font-semibold text-[#c2412d]">{off}</p>
              <p className="truncate text-[9px] font-medium text-[#13200f]">{name}</p>
            </div>
          ))}
        </div>
      </div>
      <TabBar active="home" />
    </div>
  )
}

function ListScreen() {
  return (
    <div className="flex h-full flex-col bg-white">
      <div className="bg-[#1d6fe8] px-3 pb-2 pt-3 text-white">
        <p className="text-[11px] font-medium">← Volver</p>
        <div className="mt-2 flex items-center justify-between text-[10px]">
          <span>Lista de compras</span>
          <span>0/5</span>
        </div>
        <div className="mt-1.5 h-1 overflow-hidden rounded-full bg-white/25">
          <div className="h-full w-[8%] rounded-full bg-white" />
        </div>
      </div>
      <div className="min-h-0 flex-1">
        <p className="bg-[#f3f5f3] px-3 py-1 text-[8px] font-semibold tracking-[0.12em] text-[#6b766e]">CARNES</p>
        <CheckRow name="Picanha" qty="1 un" />
        <CheckRow name="Maminha" qty="1 un" />
        <p className="bg-[#f3f5f3] px-3 py-1 text-[8px] font-semibold tracking-[0.12em] text-[#6b766e]">FRUTAS</p>
        <CheckRow name="Naranja" qty="1 kg" />
        <p className="bg-[#f3f5f3] px-3 py-1 text-[8px] font-semibold tracking-[0.12em] text-[#6b766e]">ALMACÉN</p>
        <CheckRow name="Frijoles" qty="1 kg" />
      </div>
      <div className="border-t border-[#e6e8e6] px-3 py-2">
        <p className="text-[9px] font-medium text-[#13200f]">¿Dónde vas a comprar?</p>
        <div className="mt-1 rounded-md border border-[#d7e0d3] px-2 py-1.5 text-[9px] text-[#8b938c]">Nombre del supermercado</div>
        <div className="mt-2 flex items-center justify-between gap-2">
          <div>
            <p className="text-[8px] text-[#6b766e]">Total de la compra</p>
            <p className="text-[13px] font-semibold text-[#13200f]">R$ 0,00</p>
          </div>
          <div className="rounded-lg bg-[#1d6fe8] px-2.5 py-2 text-[9px] font-semibold text-white">Finalizar compra</div>
        </div>
      </div>
      <TabBar active="lists" />
    </div>
  )
}

function RecipeScreen() {
  const items = [
    ['Filete', '600 g'],
    ['Tocino', '80 g'],
    ['Aceite', '30 ml'],
    ['Sal', '1 g'],
  ]
  return (
    <div className="flex h-full flex-col bg-[#f7f8f6]">
      <BrandBar />
      <div className="min-h-0 flex-1 space-y-2 overflow-hidden px-3">
        <div>
          <p className="text-[15px] font-semibold text-[#13200f]">Recetas</p>
          <p className="text-[9px] leading-snug text-[#6b766e]">Dinos qué quieres cocinar. Armamos la receta y la lista.</p>
        </div>
        <div className="rounded-xl border border-[#e6e8e6] bg-white p-2.5">
          <div className="flex items-start justify-between gap-2">
            <p className="text-[12px] font-semibold leading-tight text-[#13200f]">Medallón de filete</p>
            <p className="text-[8px] font-semibold text-[#1d6fe8]">Otra</p>
          </div>
          <p className="mt-0.5 text-[9px] text-[#6b766e]">4 porciones · 40 min</p>
          <p className="mt-2 rounded-md bg-[#f3f5f3] px-2 py-1.5 text-[8px] leading-snug text-[#5b6b5e]">No lo pases de cocción para que quede jugoso.</p>
          <div className="mt-2 rounded-lg bg-[#eef1ee] py-1.5 text-center text-[9px] font-medium text-[#13200f]">Guardar receta</div>
        </div>
        <p className="text-[12px] font-semibold text-[#13200f]">Qué llevar</p>
        <div className="overflow-hidden rounded-xl border border-[#e6e8e6] bg-white">
          <p className="bg-[#e8f1ff] px-2.5 py-1 text-[8px] font-semibold tracking-[0.12em] text-[#1d6fe8]">OTROS</p>
          {items.map(([name, qty]) => (
            <div key={name} className="flex items-center gap-2 border-t border-[#f0f2f0] px-2.5 py-1.5">
              <span className="grid h-4 w-4 place-items-center rounded-full bg-[#e8f1ff] text-[10px] font-semibold text-[#1d6fe8]">+</span>
              <div>
                <p className="text-[10px] font-medium text-[#13200f]">{name}</p>
                <p className="text-[8px] text-[#6b766e]">{qty}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-1.5 px-3 pb-2">
        <div className="flex-1 rounded-lg bg-[#1d6fe8] py-2 text-center text-[9px] font-semibold text-white">Llevar todo</div>
        <div className="rounded-lg bg-[#eef1ee] px-2 py-2 text-[9px] font-medium text-[#13200f]">Ver lista</div>
      </div>
      <TabBar active="recipes" />
    </div>
  )
}

function DealsScreen() {
  return (
    <div className="flex h-full flex-col bg-[#f7f8f6]">
      <BrandBar />
      <div className="min-h-0 flex-1 space-y-2 overflow-hidden px-3">
        <div>
          <p className="text-[15px] font-semibold text-[#13200f]">Ofertas</p>
          <p className="text-[9px] text-[#6b766e]">Las mejores promociones de las tiendas</p>
        </div>
        <div className="rounded-lg border border-[#d7e0d3] bg-white px-2 py-1.5 text-[9px] text-[#8b938c]">Buscar producto o supermercado</div>
        <div className="flex gap-1.5">
          <span className="rounded-full bg-[#1d6fe8] px-2.5 py-1 text-[8px] font-semibold text-white">Todas</span>
          <span className="rounded-full border border-[#d7e0d3] bg-white px-2.5 py-1 text-[8px] text-[#13200f]">Bebidas</span>
          <span className="rounded-full border border-[#d7e0d3] bg-white px-2.5 py-1 text-[8px] text-[#13200f]">Café</span>
        </div>
        <div className="overflow-hidden rounded-xl border border-[#e6e8e6] bg-white">
          <div className="relative h-24 bg-[linear-gradient(160deg,#f6b23a,#e25b2a)]">
            <span className="absolute left-2 top-2 rounded-full bg-white/90 px-1.5 py-0.5 text-[8px] font-medium text-[#13200f]">Bebidas</span>
            <span className="absolute right-2 top-2 rounded-full bg-[#c2412d] px-1.5 py-0.5 text-[8px] font-semibold text-white">-13%</span>
            <div className="absolute bottom-3 left-3 right-3 text-white">
              <p className="text-[8px] font-semibold tracking-[0.14em]">JUICE DEAL</p>
              <p className="text-[16px] font-semibold leading-none">R$ 2,59</p>
            </div>
          </div>
          <div className="space-y-1 p-2.5">
            <p className="text-[11px] font-semibold text-[#13200f]">Tropicana Fruit Punch</p>
            <p className="text-[8px] leading-snug text-[#6b766e]">Jugo frío, oferta por tiempo limitado.</p>
            <p className="text-[12px] font-semibold text-[#1d6fe8]">
              R$ 2,59 <span className="text-[9px] font-medium text-[#8b938c] line-through">R$ 2,99</span>
            </p>
            <p className="text-[8px] text-[#6b766e]">Cart-Mile · hasta 12/12</p>
            <div className="rounded-lg bg-[#1d6fe8] py-1.5 text-center text-[9px] font-semibold text-white">Ver oferta</div>
          </div>
        </div>
      </div>
      <TabBar active="deals" />
    </div>
  )
}

function CampaignsScreen() {
  return (
    <div className="flex h-full flex-col bg-[#f7f8f6]">
      <div className="flex items-center gap-2 bg-white px-3 pb-2 pt-3">
        <span className="text-[10px] font-medium text-[#1d6fe8]">← Volver</span>
        <span className="text-[12px] font-semibold text-[#13200f]">
          SmartList<span className="text-[#1d6fe8]">.AI</span>
        </span>
      </div>
      <div className="min-h-0 flex-1 space-y-2 overflow-hidden px-3">
        <div>
          <p className="text-[15px] font-semibold text-[#13200f]">Mis participaciones</p>
          <p className="text-[9px] text-[#6b766e]">Campañas de las tiendas en las que ya entraste.</p>
        </div>
        <div className="rounded-lg bg-[#1d6fe8] py-2 text-center text-[10px] font-semibold text-white">Entrar en otra</div>
        <div className="overflow-hidden rounded-xl border border-[#e6e8e6] bg-white">
          <div className="h-16 bg-[linear-gradient(135deg,#4b1d73,#c45ad0_45%,#f2c14e)]" />
          <div className="space-y-2 p-2.5">
            <div className="flex items-start justify-between gap-2">
              <p className="text-[11px] font-semibold leading-tight text-[#13200f]">¡Gana una bicicleta eléctrica!</p>
              <span className="shrink-0 rounded-full bg-[#e8f1ff] px-1.5 py-0.5 text-[8px] font-semibold text-[#1d6fe8]">Sorteo</span>
            </div>
            <div className="rounded-lg border border-[#d7e6ff] bg-[#f5f9ff] px-2 py-1.5">
              <p className="text-[7px] font-semibold tracking-[0.12em] text-[#1d6fe8]">ESTABLECIMIENTO</p>
              <p className="text-[10px] font-semibold text-[#13200f]">Milenaria Cafe</p>
              <p className="text-[8px] text-[#6b766e]">Miraflores, Lima</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-[8px] font-semibold tracking-[0.1em] text-[#6b766e]">CÓDIGO</p>
              <span className="rounded-full bg-[#e8f1ff] px-2 py-0.5 text-[9px] font-semibold tracking-wide text-[#1d6fe8]">K77VBU2Q</span>
            </div>
          </div>
        </div>
      </div>
      <TabBar active="home" />
    </div>
  )
}

const screens: Record<Screen, () => ReturnType<typeof HomeScreen>> = {
  home: HomeScreen,
  list: ListScreen,
  recipe: RecipeScreen,
  deals: DealsScreen,
  campaigns: CampaignsScreen,
}

export function AppScreen({ name }: { name: Screen }) {
  const ScreenView = screens[name]
  return <ScreenView />
}

export type { Screen }
