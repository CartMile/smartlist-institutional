import { Link } from 'react-router-dom'
import { AppScreen, type Screen } from '../components/AppScreens'
import { LaunchCountdown } from '../components/LaunchCountdown'
import { PhoneFrame } from '../components/PhoneFrame'
import { ShareWithFriends } from '../components/ShareWithFriends'
import { SiteFooter } from '../components/SiteFooter'
import { SiteHeader } from '../components/SiteHeader'
import { useLocale } from '../i18n/LocaleContext'

export function Home() {
  const { t, prelaunchPath } = useLocale()
  const h = t.home

  const appShots: Array<{ screen: Screen; alt: string; label: string }> = [
    { screen: 'list', alt: h.shotListAlt, label: h.shotList },
    { screen: 'recipe', alt: h.shotRecipesAlt, label: h.shotRecipes },
    { screen: 'deals', alt: h.shotDealsAlt, label: h.shotDeals },
  ]

  const sections = [
    {
      id: 'organizar',
      title: h.organizeTitle,
      body: [h.organizeBody1, h.organizeBody2],
      screen: 'list' as Screen,
      phoneAlt: h.organizePhoneAlt,
    },
    {
      id: 'receitas',
      title: h.recipesTitle,
      body: [h.recipesBody],
      emphasisLead: h.recipesEmphasisLead,
      emphasis: h.recipesEmphasis,
      screen: 'recipe' as Screen,
      phoneAlt: h.recipesPhoneAlt,
      reverse: true,
    },
    {
      id: 'ofertas',
      title: h.dealsTitle,
      body: [h.dealsBody1, h.dealsBody2],
      screen: 'deals' as Screen,
      phoneAlt: h.dealsPhoneAlt,
    },
    {
      id: 'campanhas',
      title: h.campaignsTitle,
      body: [h.campaignsBody],
      emphasis: h.campaignsEmphasis,
      disclaimer: h.campaignsDisclaimer,
      screen: 'campaigns' as Screen,
      phoneAlt: h.campaignsPhoneAlt,
      reverse: true,
    },
  ]

  return (
    <div className="min-h-screen bg-canvas text-ink">
      <SiteHeader variant="dark" />

      <section className="relative min-h-[100svh] bg-black">
        <div className="absolute inset-0 overflow-hidden">
          <img src="/images/hero.jpg" alt="" className="anim-pan absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/45" />
        </div>

        <div className="relative z-10 mx-auto grid min-h-[100svh] max-w-6xl items-end gap-10 px-4 pb-14 pt-28 sm:px-6 sm:pb-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <div className="anim-fade mb-8">
              <img
                src="/logo.png?v=3"
                alt="SmartList"
                className="h-36 w-auto max-w-[min(100%,20rem)] object-contain object-left sm:h-48 sm:max-w-[24rem] lg:h-56 lg:max-w-[28rem]"
              />
              <p className="font-display mt-4 text-4xl font-semibold tracking-tight text-white sm:text-6xl">SmartList</p>
            </div>

            <h1 className="anim-rise font-display max-w-xl text-2xl font-medium leading-snug tracking-tight text-white/95 sm:text-4xl sm:leading-[1.15]">
              {h.heroTitle}
            </h1>

            <p className="anim-rise-delay mt-4 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">{h.heroBody}</p>

            <LaunchCountdown />

            <div className="anim-rise-delay-2 mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                to={prelaunchPath}
                className="inline-flex min-h-12 items-center justify-center rounded-xl bg-lime px-6 text-base font-semibold text-ink transition hover:bg-lime-hover"
              >
                {h.heroCta}
              </Link>
              <p className="text-sm text-white/75 sm:max-w-xs">{h.heroNote}</p>
            </div>
            <div className="mt-4">
              <ShareWithFriends />
            </div>
          </div>

          <div className="anim-rise-delay hidden justify-center lg:flex">
            <PhoneFrame alt={h.heroPhoneAlt}>
              <AppScreen name="home" />
            </PhoneFrame>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-panel">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{h.galleryTitle}</h2>
            <p className="mt-4 text-base leading-relaxed text-mute sm:text-lg">{h.galleryBody}</p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {appShots.map((shot) => (
              <figure key={shot.screen} className="mx-auto w-full max-w-[240px]">
                <PhoneFrame alt={shot.alt}>
                  <AppScreen name={shot.screen} />
                </PhoneFrame>
                <figcaption className="mt-3 text-center text-sm font-medium text-soft">{shot.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {sections.map((section) => (
        <section key={section.id} className="border-b border-line bg-[linear-gradient(180deg,#f7faf5_0%,#eef4ea_100%)]">
          <div
            className={`mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-2 lg:gap-14 ${
              section.reverse ? 'lg:[&>*:first-child]:order-2' : ''
            }`}
          >
            <div>
              <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
                {section.title}
              </h2>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-mute sm:text-lg">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.emphasis ? (
                  <p>
                    {section.emphasisLead ? `${section.emphasisLead} ` : null}
                    <strong className="font-semibold text-ink">{section.emphasis}</strong>
                  </p>
                ) : null}
                {section.disclaimer ? <p className="text-sm italic text-soft">{section.disclaimer}</p> : null}
              </div>
            </div>
            <PhoneFrame alt={section.phoneAlt}>
              <AppScreen name={section.screen} />
            </PhoneFrame>
          </div>
        </section>
      ))}

      <section className="bg-[radial-gradient(circle_at_top_left,#dff3b8,transparent_42%),radial-gradient(circle_at_bottom_right,#ffd9a8,transparent_40%),linear-gradient(180deg,#f4f8f0,#e8f0e3)]">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 sm:py-24">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{h.freeTitle}</h2>
          <p className="mt-5 text-base leading-relaxed text-mute sm:text-lg">
            {h.freeBodyLead} <strong className="font-semibold text-ink">{h.freeBodyStrong}</strong> {h.freeBodyTrail}
          </p>
          <p className="mt-4 text-base leading-relaxed text-mute sm:text-lg">{h.freeBody2}</p>
        </div>
      </section>

      <section className="bg-night text-white">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 sm:py-24">
          <img
            src="/logo.png?v=3"
            alt=""
            className="mx-auto mb-6 h-28 w-auto max-w-[16rem] object-contain sm:h-40 sm:max-w-[20rem]"
          />
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">{h.ctaTitle}</h2>
          <p className="mt-5 text-base leading-relaxed text-white/80 sm:text-lg">{h.ctaBody}</p>
          <Link
            to={prelaunchPath}
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-xl bg-lime px-6 text-base font-semibold text-ink transition hover:bg-lime-hover"
          >
            {h.ctaButton}
          </Link>
          <div className="mt-4 flex justify-center">
            <ShareWithFriends align="center" />
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
