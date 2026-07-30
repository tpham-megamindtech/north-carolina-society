import { generate } from "./gen.mjs";

const articles = [
  {
    slug: "asheville-thermal-bathhouse-revival",
    title: "The Mountain Bathhouse Reviving an Ancient Ritual in Asheville",
    excerpt:
      "At Verdant, a new thermal bathhouse in the Blue Ridge foothills, the centuries-old practice of contrast bathing is being reimagined for a wellness-hungry generation.",
    date: "2026-07-16",
    credit: "Marisol Reyes",
    body: `There is a particular silence to the mountains at dawn, and Verdant, Asheville's new thermal bathhouse, has built an entire philosophy around it.

## Hot, cold, repeat

The ritual is elemental: a plunge into steaming mineral water, a shock of cold, a wrapped and drowsy rest, then the cycle again. Contrast bathing is older than record-keeping, practiced from Rome to Reykjavik. Verdant's founders have simply given it a mountain address.

The water is drawn from local springs, the cedar rooms scented with balsam. Phones are surrendered at the door.

> "People arrive wired and leave rearranged," the spa's director told us. "The mountains do half the work."

## A slower luxury

What distinguishes the experience is its refusal to rush. In an industry addicted to add-ons and upsells, Verdant sells time and quiet — the rarest amenities of all.

For a city that has long marketed itself on wellness, the bathhouse feels less like a trend than a homecoming.`,
  },
  {
    slug: "charlotte-medical-spa-longevity-clinics",
    title: "Inside Charlotte's New Wave of Longevity Clinics",
    excerpt:
      "Somewhere between a dermatologist's office and a members' club, the city's medical spas are selling not just beauty but the promise of more years.",
    date: "2026-06-27",
    credit: "Dr. Lena Ostroff",
    body: `The waiting room looks like a boutique hotel lobby. The menu reads like a laboratory. Welcome to Charlotte's longevity clinic, where the pursuit of youth has gone clinical.

## Beauty, medicalized

These are not the facial spas of a decade ago. Staffed by physicians and stocked with diagnostic equipment, the new medical spas offer bloodwork, hormone panels and infusions alongside the expected aesthetics.

The pitch is seductive: measure everything, optimize relentlessly, and treat aging as a condition to be managed rather than accepted.

## Promise and skepticism

Not everyone is convinced. Some physicians warn that the science behind certain treatments remains thin, and that affluence can outrun evidence.

Still, the clinics are booked solid. In a culture that increasingly views health as a personal project, Charlotte's affluent have found a place to invest in the longest game there is.`,
  },
  {
    slug: "forest-bathing-blue-ridge-shinrin-yoku",
    title: "Forest Bathing Comes to the Blue Ridge",
    excerpt:
      "Certified guides are leading slow, sensory walks through the state's oldest woods — and the science suggests the calm they induce is more than poetic.",
    date: "2026-06-11",
    credit: "Yuki Tanaka",
    body: `The Japanese call it shinrin-yoku — forest bathing — and it is exactly as gentle as it sounds. No summit to bag, no miles to log. Just a slow, attentive walk beneath the canopy.

## The practice of noticing

Along the Blue Ridge, certified guides now lead small groups through some of the oldest forest in the eastern United States. The instruction is minimal: slow down, breathe, notice.

Participants describe a softening of attention, a loosening of the mental grip that city life demands.

## More than metaphor

The benefits are not merely poetic. Research links time among trees to lower stress hormones and blood pressure, effects attributed partly to compounds the trees themselves release.

In a region blessed with extraordinary woods, forest bathing turns the landscape itself into the treatment.`,
  },
  {
    slug: "maison-belle-salon-charlotte-artistry",
    title: "At Maison Belle, the Salon Becomes an Atelier",
    excerpt:
      "Charlotte's most talked-about hair studio treats a cut like couture, complete with consultations, sketches and a waitlist that stretches for months.",
    date: "2026-05-23",
    credit: "Colette Fabron",
    body: `You do not simply book an appointment at Maison Belle. You apply, wait and, eventually, are received.

## Couture for the head

The Charlotte studio has reframed the haircut as bespoke craft. First comes a consultation — sometimes a sketch — then a slow, deliberate session that can stretch across an afternoon.

The founder trained in Paris and Milan, and it shows in the theater of the place: the marble, the espresso, the unhurried pace.

## Scarcity as strategy

The waitlist is legendary and, critics might say, engineered. But clients insist the results justify the wait, describing cuts that grow out gracefully over months.

In a city increasingly comfortable with luxury, Maison Belle has proved that even a haircut can become an occasion.`,
  },
  {
    slug: "raleigh-sound-bath-meditation-studios",
    title: "The Sound Bath Studios Rewiring Raleigh's Nervous System",
    excerpt:
      "Gongs, bowls and low frequencies are drawing stressed professionals to a practice that promises deep rest without a single breath of instruction.",
    date: "2026-05-08",
    credit: "Aria Delmonico",
    body: `Lie down, close your eyes, and let sound do the rest. That is the entire premise of the sound bath, and in Raleigh it has become an unlikely obsession.

## Bathing in vibration

The studios are dim and warm. Practitioners play gongs, crystal bowls and chimes, filling the room with overlapping frequencies that participants describe as almost physical.

There is no posture to hold, no breath to count. The passivity is the point — a rare permission to simply receive.

## Rest as rebellion

The clientele skews toward exhausted professionals for whom traditional meditation feels like one more task to fail at. Sound baths ask nothing but presence.

Whether the effects are neurological or simply a well-earned nap, the studios keep filling. In a striving city, doing absolutely nothing has become the ultimate indulgence.`,
  },
  {
    slug: "carolina-clean-beauty-brands-botanical",
    title: "The Carolina Botanists Building Clean Beauty From the Ground Up",
    excerpt:
      "A cluster of local skincare makers is formulating with native plants — sourwood, muscadine, mountain mint — and turning regional flora into covetable products.",
    date: "2026-04-19",
    credit: "Freya Lindholm",
    body: `The most interesting ingredients in Carolina skincare are growing in Carolina soil.

## A regional formulary

A new generation of local beauty makers is formulating with native botanicals — muscadine grape, sourwood, mountain mint — prized for antioxidants and a sense of place.

The approach is part science, part storytelling. A serum built on regional flora carries a narrative no imported ingredient can match.

## Small batch, high standards

These are not garage operations. The founders speak fluently of cold-pressing, stability testing and supply-chain transparency, positioning their lines squarely in the premium clean-beauty market.

By turning the state's own landscape into a formulary, they have given Carolina beauty an identity as distinctive as its terroir.`,
  },
  {
    slug: "wellness-real-estate-spa-residences",
    title: "When Home Becomes a Spa: The Rise of Wellness Residences",
    excerpt:
      "Developers across the state are marketing saunas, cold plunges and circadian lighting as standard — blurring the line between where you live and where you recover.",
    date: "2026-03-31",
    credit: "Sebastian Vance",
    body: `The amenity war among luxury developments used to be about granite and gyms. Now it is about recovery.

## The spa moves in

Across the state, new residences arrive equipped with saunas, cold plunges, meditation rooms and lighting tuned to the body's circadian rhythm. Wellness, once an outing, is becoming an address.

The pitch appeals to affluent buyers who have internalized the language of optimization and want it built into the walls.

## A premium on recovery

Skeptics note that a cold plunge does not make a home healthy any more than a treadmill makes a gym membership used. But developers are betting that the symbolism sells.

For buyers, the promise is seductive: a home that does not just shelter you, but restores you.`,
  },
  {
    slug: "asheville-herbalism-apothecary-tradition",
    title: "The Appalachian Apothecary Tradition Finds a New Audience",
    excerpt:
      "Rooted in generations of mountain folk medicine, Asheville's herbalists are bridging old knowledge and modern wellness — carefully, and with a botanist's rigor.",
    date: "2026-03-14",
    credit: "Ruth Calloway",
    body: `Long before wellness was a market, the Southern Appalachians had herbalists — keepers of a plant knowledge passed down through generations of mountain families.

## An inherited pharmacy

That tradition never fully vanished, and in Asheville it is enjoying a thoughtful revival. Modern apothecaries blend ancestral knowledge with botanical rigor, offering tinctures and teas grounded in both folklore and study.

The best practitioners are careful, quick to distinguish supported remedies from wishful thinking.

## Old roots, new interest

A younger, wellness-minded clientele has embraced the apothecaries, drawn to their authenticity and sense of lineage.

The result is a rare thing in the wellness world: a trend with genuine roots, tended by people who never regarded it as a trend at all.`,
  },
  {
    slug: "charlotte-fitness-boutique-recovery-studios",
    title: "Charlotte's Fitness Scene Discovers That Recovery Is the New Workout",
    excerpt:
      "Cryotherapy, compression, red light and contrast pools: the city's boutique studios are selling what happens after the exercise, not during it.",
    date: "2026-02-27",
    credit: "Marcus Deveraux",
    body: `For a decade, Charlotte's fitness boom was about intensity — the harder class, the heavier lift. The new frontier is the opposite: doing less, better.

## The recovery boom

Boutique studios now devote entire floors to recovery: cryotherapy chambers, compression suits, red-light panels and contrast pools. The premise is that adaptation happens during rest, not effort.

The clientele includes weekend athletes and desk-bound professionals alike, united by the discovery that soreness is optional.

## Science and salesmanship

The evidence for some modalities is stronger than others, and the industry does not always distinguish. But the underlying insight is sound: recovery matters, and most people neglect it.

In a fitness culture long obsessed with pushing harder, Charlotte's studios are making a fortune teaching people to ease off.`,
  },
  {
    slug: "carolina-thermal-springs-mineral-water",
    title: "The Forgotten Mineral Springs the Carolinas Are Rediscovering",
    excerpt:
      "Once the destination of nineteenth-century health pilgrims, the region's thermal and mineral springs are being restored as destinations for a new era of wellness travel.",
    date: "2026-02-05",
    credit: "Josephine Marlowe",
    body: `In the nineteenth century, the ailing and the affluent traveled to the Carolinas' mineral springs believing the waters could cure. The grand hotels faded, but the springs remained.

## Waters, rediscovered

Now a wave of restoration is bringing them back. Investors are reviving historic spring sites as wellness destinations, pairing the mineral-rich waters with contemporary spa design.

The appeal blends history and health — the sense of joining a lineage of seekers stretching back generations.

## Authenticity as amenity

Unlike manufactured wellness resorts, the springs offer something that cannot be built: genuine geology and genuine heritage.

For a wellness industry hungry for authenticity, the Carolinas' forgotten waters may prove to be their most valuable asset.`,
  },
  {
    slug: "clean-scalp-hair-health-movement",
    title: "The Scalp-First Movement Transforming Carolina Hair Care",
    excerpt:
      "Salons across the state are treating hair health as a matter of dermatology, borrowing the language of skincare to build a lucrative new category.",
    date: "2026-01-20",
    credit: "Nadia Okonkwo",
    body: `The most fashionable idea in Carolina hair care starts not with the hair but with the skin beneath it.

## Skincare for the scalp

Salons are increasingly treating the scalp as an extension of dermatology — analyzing it, exfoliating it, prescribing regimens. The vocabulary of skincare, with its serums and barriers and microbiomes, has migrated north to the hairline.

The category is lucrative precisely because it is recurring: healthy hair, the logic goes, requires ongoing maintenance.

## Substance beneath the trend

Dermatologists broadly endorse the underlying principle — scalp health genuinely affects hair — while cautioning against overtreatment.

For salons, the scalp-first movement has opened a profitable frontier, one built on the sensible premise that beauty begins at the root.`,
  },
  {
    slug: "wellness-tourism-mountain-retreats-corporate",
    title: "The Corporate Retreat Grows Up, and Heads for the Mountains",
    excerpt:
      "Executive teams are trading conference hotels for immersive mountain wellness retreats, and a Carolina hospitality niche is booming to meet them.",
    date: "2025-10-30",
    credit: "Adrian Whitlock",
    body: `The corporate retreat once meant a windowless ballroom and a trust fall. Increasingly, it means a mountain, a sauna and a facilitator with a background in psychology.

## Off-site, reimagined

Carolina hospitality operators are building a niche around immersive wellness retreats for executive teams — programs that blend strategy sessions with breathwork, hiking and long, screen-free evenings.

The premise is that better-rested, better-connected teams make better decisions, and that the mountains provide the setting to reset.

## Return on serenity

Whether the effects survive the return to the inbox is an open question. But companies keep booking, having concluded that a well-run retreat is cheaper than burnout.

For the Carolinas' mountain properties, the corporate wellness market has become a reliable and lucrative season unto itself.`,
  },
  {
    slug: "carolina-perfumery-scent-of-place",
    title: "Bottling the Blue Ridge: The Perfumers Capturing a Sense of Place",
    excerpt:
      "A small guild of Carolina fragrance makers is composing scents around loblolly pine, tobacco flower and coastal salt — turning geography into perfume.",
    date: "2025-08-14",
    credit: "Émile Rousseau",
    body: `Perfume has always traded in place — the lavender of Provence, the roses of Grasse. A handful of Carolina perfumers are asking what the Blue Ridge smells like, and bottling the answer.

## Notes of home

Their compositions read like a regional map: loblolly pine, tobacco flower, muscadine, coastal salt. The results are unmistakably Southern, evocative of humid mornings and mountain evenings.

The makers work in tiny batches, closer to artists than manufacturers.

## Terroir in a bottle

The appeal lies in specificity. In a market crowded with generic florals, a fragrance that smells like a particular place carries genuine distinction.

For those who love the Carolinas, the perfumes offer something remarkable: the chance to carry the landscape with them, invisibly.`,
  },
  {
    slug: "menopause-womens-health-clinics-raleigh",
    title: "The Clinics Finally Taking Women's Midlife Health Seriously",
    excerpt:
      "A new model of women's health practice in the Triangle is treating menopause with the attention and investment long reserved for other life stages.",
    date: "2025-05-27",
    credit: "Dr. Camille Ashford",
    body: `For decades, midlife women's health was medicine's afterthought — under-researched, under-discussed, under-treated. A new kind of clinic in the Triangle intends to change that.

## Filling a gap

These practices specialize in the transitions that conventional care often rushes past, offering time, expertise and a willingness to take symptoms seriously.

The demand has been overwhelming, a testament to how many women felt unheard by the standard system.

## Overdue attention

Founders frame the work as both medical and cultural — normalizing conversations that were long shrouded in embarrassment.

That a booming clinic can be built simply by listening to women says much about how long the need went unmet. In the Triangle, at least, it is finally being addressed.`,
  },
  {
    slug: "cold-plunge-culture-carolina-lakes",
    title: "Cold-Water Clubs and the Carolinas' Plunge Obsession",
    excerpt:
      "From mountain rivers to Piedmont lakes, informal cold-plunge communities are turning a Scandinavian ritual into a distinctly Carolina social scene.",
    date: "2025-02-18",
    credit: "Torsten Halvorsen",
    body: `On weekend mornings, small groups gather at lakes and rivers across the Carolinas to do something that sounds unpleasant: get into very cold water on purpose.

## The plunge goes social

What began as a fringe wellness practice has become a genuine subculture. Informal clubs meet at mountain rivers and Piedmont lakes, sharing the gasp of the first submersion and the euphoria that follows.

The appeal is as much social as physiological. The cold, members say, forges an instant bond.

## Discomfort, together

Researchers continue to study cold exposure's effects on mood and inflammation, with promising if incomplete results. The practitioners are unbothered by the science's gaps.

For them, the point is simpler: a hard, bracing shared ritual, and the strange joy of doing something difficult with other people.`,
  },
  {
    slug: "sourwood-spa-appalachian-luxury",
    title: "Sourwood, the Mountain Spa Redefining Appalachian Luxury",
    excerpt:
      "High above a Blue Ridge valley, a new destination spa is proving that world-class indulgence and rustic sense of place need not be at odds.",
    date: "2024-12-20",
    credit: "Vivienne Astor",
    body: `Perched above a fog-filled valley, Sourwood makes an argument with its very location: that luxury and landscape can amplify rather than dilute each other.

## Rustic, refined

The spa's design is unmistakably Appalachian — reclaimed timber, local stone, enormous windows framing the ridgeline — yet the service rivals any coastal resort.

Treatments draw on regional botanicals, and the menu changes with the mountain seasons.

## A sense of place

What Sourwood sells is not escape from the mountains but immersion in them. The pampering is real, but so is the insistence that guests engage with the surrounding wild.

In doing so, the spa has defined a category all its own: Appalachian luxury, unhurried and deeply rooted in its ground.`,
  },
  {
    slug: "carolina-wellness-hospitality-hotel-spas",
    title: "Why Every New Carolina Hotel Is Really a Spa in Disguise",
    excerpt:
      "Wellness has become the organizing principle of luxury hospitality across the state, reshaping how hotels are designed, staffed and sold.",
    date: "2024-12-09",
    credit: "Beatriz Fonseca",
    body: `Ask a Carolina hotelier about their newest property and the conversation turns, almost immediately, to wellness.

## The spa as anchor

Across the state, new luxury hotels are being organized around their wellness offerings — the spa is no longer an amenity tucked in the basement but the anchor around which the property is planned.

Design, staffing and programming all flow from the premise that today's affluent traveler books recovery as much as accommodation.

## The new luxury

The shift reflects a broader change in what wealth wants. Thread counts and minibars no longer impress; saunas, treatment menus and thoughtful stillness do.

The Carolina hotel, it turns out, has quietly become a spa that happens to offer beds.`,
  },
];

generate("beauty-wellness", articles);
