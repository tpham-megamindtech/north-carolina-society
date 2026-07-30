import { generate } from "./gen.mjs";

const articles = [
  {
    slug: "queen-city-banking-capital-of-the-south",
    title: "How Charlotte Quietly Became the Banking Capital of the South",
    excerpt:
      "Second only to New York in banking assets, the Queen City has turned uptown towers into a financial engine that now rivals Wall Street for talent.",
    date: "2026-07-14",
    credit: "Marcus Ellery",
    body: `Charlotte does not look like a financial capital. There is no frantic trading floor spilling onto the sidewalk, no cathedral of commerce older than the republic. Yet by assets under management, the city trails only New York — a fact that still surprises the executives who move here from the coasts.

## A skyline built on deposits

The transformation began decades ago, when a handful of ambitious regional lenders decided that geography was no barrier to scale. Today, uptown's glass towers house treasury operations, wealth desks and technology teams that quietly move a meaningful share of the country's money.

What sets the Queen City apart is not swagger but discipline. Bankers here speak of "relationship capital" the way Asheville chefs speak of terroir — a slow, cultivated thing.

> "We built this on trust, not noise," one veteran executive told us over coffee near Tryon Street. "The rest of the country is only now catching up."

## The next chapter

The question facing Charlotte is whether it can hold its talent as fintech reshapes the industry. For now, the answer arrives every morning in the elevators of uptown: a workforce that increasingly sees the Carolinas, not Manhattan, as the center of American finance.`,
  },
  {
    slug: "research-triangle-ai-corridor-vireo-labs",
    title: "Inside the Research Triangle's Quiet Race to Build the Next AI Corridor",
    excerpt:
      "From Durham lab space to Raleigh venture floors, a cluster of firms led by Vireo Labs is betting the Triangle can rival Austin for applied artificial intelligence.",
    date: "2026-06-23",
    credit: "Priya Nandakumar",
    body: `The Research Triangle has always been a place of patient science — a region where breakthroughs are measured in grant cycles rather than news cycles. Lately, however, the pace has changed.

## From pharma to processors

For years the Triangle's reputation rested on life sciences. Now a new generation of firms, anchored by the well-funded Vireo Labs, is redirecting that expertise toward applied artificial intelligence: models that read radiology scans, optimize crop yields and route freight across the Southeast.

The advantage is talent. Three major universities feed a steady stream of graduates into Durham and Raleigh, and the cost of building here remains a fraction of Silicon Valley's.

## The Austin comparison

Investors increasingly frame the Triangle as "the next Austin" — a phrase local founders regard with a mix of flattery and irritation. They would rather the region be the first Triangle than the second anything.

Whether the corridor matures into a national hub depends on capital staying patient. If it does, the quiet labs off Interstate 40 may soon be anything but.`,
  },
  {
    slug: "piedmont-trust-private-wealth-old-money",
    title: "Piedmont Trust and the New Grammar of Old Carolina Money",
    excerpt:
      "As generational wealth changes hands across the state, the private bank has rewritten how discreet Carolina families think about legacy, philanthropy and risk.",
    date: "2026-05-19",
    credit: "Eleanor Voss",
    body: `Old money in North Carolina has always preferred to be felt rather than seen. The families who built fortunes in textiles, tobacco and furniture learned long ago that discretion is its own form of wealth.

## A generational handover

That reticence is now being tested by the largest wealth transfer in the state's history. Piedmont Trust, the private bank that advises many of these families, estimates that tens of billions will change hands across the Carolinas within a decade.

The heirs, it turns out, want something different from their parents. They ask about climate funds, about impact, about art. They are less interested in preserving a portfolio than in expressing a set of values through it.

## Legacy, reconsidered

For advisors, the shift demands a new vocabulary. Estate planning conversations that once ended with trusts and tax shelters now begin with mission statements.

The old grammar of Carolina money — quiet, cautious, conservative — is being rewritten by a generation that grew up comfortable and wants its capital to mean something.`,
  },
  {
    slug: "catawba-capital-venture-fund-southeast",
    title: "Catawba Capital Closes the Largest Venture Fund in State History",
    excerpt:
      "The Charlotte firm's new fund signals that Southeastern founders no longer need a Bay Area zip code to raise serious money.",
    date: "2026-05-06",
    credit: "Theo Marchetti",
    body: `When Catawba Capital announced the close of its latest fund, the number itself made headlines. But the more consequential story was geographic: nearly all of the capital is earmarked for companies south of the Mason-Dixon line.

## Keeping founders home

For a generation, the most ambitious Carolina founders faced a familiar choice — decamp to San Francisco or watch their best hires leave for firms that had. Catawba's thesis is that this exodus is ending.

The firm points to a maturing local ecosystem: repeat founders, experienced operators and a cost base that lets startups extend their runway by months.

## A regional bet

Skeptics note that big funds can struggle to deploy capital wisely, and that the Southeast has yet to produce a defining unicorn. Catawba's partners are unbothered.

They have seen enough to believe the next great American company might just as easily rise from Charlotte or Chapel Hill as from Palo Alto — and they intend to write the first check when it does.`,
  },
  {
    slug: "cardinal-fox-bank-branch-of-the-future",
    title: "Cardinal & Fox Reimagines the Bank Branch as a Members' Club",
    excerpt:
      "The boutique lender is closing counters and opening lounges, betting that in an app-first world, physical banking must offer something screens cannot.",
    date: "2026-04-21",
    credit: "Isabelle Cheng",
    body: `Walk into the newest Cardinal & Fox location in SouthPark and you will not find a teller line. You will find a concierge, a coffee bar and a reading room stocked with design monographs.

## Banking, minus the counter

The boutique lender has concluded that transactional banking belongs entirely on the phone. What remains for the branch, its executives argue, is hospitality — advice, community and a sense of belonging.

Members book appointments the way they might reserve a table. The aesthetic borrows freely from private clubs: warm woods, soft lighting, no visible signage screaming interest rates.

## A calculated gamble

The approach is not cheap, and critics wonder whether relationship banking can justify the real estate. But early results suggest the lounges attract exactly the affluent, sticky clients every bank covets.

In an industry racing to eliminate human contact, Cardinal & Fox is betting that the human part is the product.`,
  },
  {
    slug: "blue-ridge-ventures-outdoor-economy",
    title: "The Fund Turning North Carolina's Outdoor Economy Into a Growth Story",
    excerpt:
      "Blue Ridge Ventures is quietly financing the gear brands, guiding outfits and trail-town startups powering the state's booming outdoor sector.",
    date: "2026-04-02",
    credit: "Garrett Holloway",
    body: `North Carolina's mountains have always drawn hikers and paddlers. Increasingly, they are drawing investors.

## An economy of altitude

Blue Ridge Ventures has built a portfolio around a simple observation: the outdoor sector is no longer a lifestyle, it is an industry. From technical apparel manufactured in the foothills to booking platforms for backcountry guides, the firm is financing a supply chain that barely existed a decade ago.

The western counties, long dependent on furniture and textiles, have found in recreation an unlikely engine of renewal.

## Trail towns, reborn

Small towns that once emptied when the mills closed are filling again with climbers, remote workers and the businesses that serve them. Real estate follows, and so does capital.

The firm's partners are careful to frame their work as stewardship as much as investment. Protecting the very landscapes that generate the returns, they concede, is the only sustainable strategy.`,
  },
  {
    slug: "charlotte-fintech-payments-startups-2026",
    title: "Charlotte's Fintech Founders Take On the Payments Establishment",
    excerpt:
      "A wave of uptown startups is using the city's banking DNA to reinvent how small businesses move money — often in partnership with the very giants they hope to disrupt.",
    date: "2026-03-17",
    credit: "Sana Rahimi",
    body: `In most cities, fintech founders position themselves against big banks. In Charlotte, they tend to have worked for one.

## Insiders turned upstarts

The city's payments startups are staffed by veterans of its banking towers — engineers and product leads who understand exactly where the incumbents are slow. That fluency shapes a distinctive local strategy: build alongside the giants, not merely against them.

The result is a crop of companies focused on unglamorous but lucrative problems — reconciliation, fraud, cross-border settlement for the region's manufacturers.

## A friendlier disruption

This coziness has its critics, who wonder whether true disruption can come from within the establishment. Founders counter that distribution is everything, and that a warm introduction to a bank's small-business clients is worth more than any pitch-day applause.

For now, Charlotte's fintech scene looks less like a rebellion and more like a renovation — carried out by people who know exactly where the walls are.`,
  },
  {
    slug: "asheville-craft-economy-scaling-brands",
    title: "When a Craft Brand Grows Up: Asheville's Scaling Dilemma",
    excerpt:
      "The mountain city built a national reputation on small-batch everything. Now its most successful makers face the hardest question in business: how big is too big?",
    date: "2026-02-24",
    credit: "Nathaniel Brooks",
    body: `Asheville's identity is built on smallness — the single roaster, the neighborhood brewery, the maker who knows every customer by name. Success, paradoxically, threatens that identity.

## The scaling paradox

Several of the city's beloved brands have grown large enough to distribute nationally. With scale come investors, efficiency consultants and the quiet pressure to standardize the very quirks that made the products special.

Founders describe an emotional negotiation as much as a financial one. Grow too fast and you betray the community that built you; grow too slowly and a better-capitalized rival eats your shelf space.

## Guarding the soul

Some have found a middle path — capping production, staying employee-owned, or licensing rather than franchising. Others have sold, cashing out with mixed feelings.

The mountain city is becoming a laboratory for a broader American question: whether a brand can get big without getting hollow.`,
  },
  {
    slug: "raleigh-life-sciences-boom-lab-space",
    title: "Raleigh's Life-Sciences Boom Is Running Out of Lab Space",
    excerpt:
      "Demand for specialized real estate has outstripped supply across the Triangle, forcing developers into a construction race with real consequences for the region's scientists.",
    date: "2026-02-10",
    credit: "Delphine Aubry",
    body: `The bottleneck in Raleigh's booming life-sciences sector is not talent or capital. It is square footage.

## A shortage of benches

Specialized laboratory space — with its reinforced floors, redundant power and exacting ventilation — cannot be conjured overnight. As biotech firms expand, they are competing for a scarce inventory of buildings that meet their needs.

Developers have responded with a wave of speculative construction, converting office parks and greenfield sites into research campuses. Even so, the pipeline lags demand.

## The cost of success

The squeeze has consequences. Young companies delay hiring while they wait for space; some decamp to cheaper metros. Rents have climbed to levels that would have been unthinkable a few years ago.

For a region that has staked its future on science, the message is clear: the hardest part of a boom is building fast enough to keep it going.`,
  },
  {
    slug: "family-office-charlotte-next-generation",
    title: "The Rise of the Carolina Family Office",
    excerpt:
      "Wealthy families across the state are professionalizing how they manage money, importing a model once reserved for the coasts — and reshaping local philanthropy in the process.",
    date: "2026-01-28",
    credit: "Roman Delacroix",
    body: `A decade ago, the phrase "family office" rarely surfaced in North Carolina conversation. Today it is everywhere in the state's wealthiest circles.

## Institutionalizing the fortune

As fortunes grow more complex, families are hiring their own investment staff, tax specialists and philanthropic directors — building, in effect, private financial institutions to serve a single household.

The trend imports a model long common in New York and Los Angeles. But the Carolina version carries a distinct accent: an emphasis on discretion, community roots and generational continuity.

## A philanthropic ripple

The consequences reach beyond the families themselves. Professionalized giving means larger, more strategic gifts to local universities, hospitals and arts institutions.

The family office, once a symbol of coastal excess, is quietly becoming an engine of Carolina civic life.`,
  },
  {
    slug: "textile-mills-advanced-manufacturing-revival",
    title: "From Textiles to Titanium: The Piedmont's Manufacturing Second Act",
    excerpt:
      "The looms fell silent decades ago. Now the same Piedmont towns are winning advanced-manufacturing plants that pay more and demand entirely new skills.",
    date: "2026-01-14",
    credit: "Cassius Fenwick",
    body: `The story of the Piedmont's textile collapse has been told so often it hardens into fatalism. A newer story is more complicated, and more hopeful.

## New tenants, old walls

Across the region, shuttered mills and vacant industrial land are attracting a different kind of manufacturer — makers of aerospace components, electric-vehicle parts and precision instruments.

The jobs are fewer than the mills once offered but pay considerably more, and they demand technical skills that local community colleges are scrambling to teach.

## The retraining challenge

That skills gap is the plot's central tension. A generation raised on assembly-line certainty must now learn robotics and metrology, often mid-career.

Where the retraining works, the Piedmont's second act looks genuinely bright. Where it stalls, the plants import talent, and the promised revival passes the locals by.`,
  },
  {
    slug: "durham-black-founders-capital-access",
    title: "Durham's Black Founders Rewrite the Capital Map",
    excerpt:
      "Building on the legacy of the city's historic Black Wall Street, a new generation of entrepreneurs is closing the funding gap on its own terms.",
    date: "2025-11-15",
    credit: "Amara Whitfield",
    body: `Durham carries a history few American cities can claim: an early-twentieth-century corridor of Black-owned banks and insurers so vibrant it earned the name Black Wall Street.

## Inheriting an ambition

Today's founders invoke that legacy deliberately. They are building fintech firms, consumer brands and health startups — and, crucially, the funding vehicles to back one another.

New angel networks and micro-funds led by local operators are chipping away at a persistent gap: the difficulty Black entrepreneurs face raising early capital from traditional sources.

## Ownership as strategy

The emphasis is on ownership — of companies, of capital, of the narrative itself. Rather than wait for outside investors to discover them, these founders are assembling the balance sheets to invest in their own community.

It is less a revival than a continuation, picking up an ambition that never truly disappeared.`,
  },
  {
    slug: "wilmington-film-studios-tax-incentives",
    title: "Lights, Capital, Action: Wilmington's Film Economy Roars Back",
    excerpt:
      "Renewed incentives and a deep bench of crews have made the port city a serious rival to Georgia for streaming productions — and a magnet for investment.",
    date: "2025-09-09",
    credit: "Lucia Fontaine",
    body: `For decades, Wilmington's soundstages made it an unlikely capital of American screen production. A lapse in incentives nearly ended the run. Now the cameras are back.

## Incentives and infrastructure

Renewed state support has drawn a wave of streaming productions to the port city, which offers something money cannot quickly buy: an experienced local crew base built over generations.

Soundstages are booked months out. Ancillary businesses — catering, equipment, post-production — are hiring again.

## Chasing Georgia

The benchmark, everyone acknowledges, is Georgia, whose aggressive incentives built a colossal industry. Wilmington cannot match that scale, but it can compete on craft and character.

The risk is familiar: an economy tied to incentives lives at the mercy of the next legislative session. For now, though, the port city is enjoying its close-up.`,
  },
  {
    slug: "greensboro-logistics-hub-megasite",
    title: "The Megasite Gamble Reshaping the Triad's Economy",
    excerpt:
      "A vast tract of prepared industrial land near Greensboro has landed transformative tenants — and raised hard questions about who benefits from megasite economics.",
    date: "2025-06-24",
    credit: "Bennett Krauss",
    body: `The economic development playbook of the moment is the megasite — thousands of acres, graded, permitted and ready for a single enormous tenant.

## Building the field of dreams

Near Greensboro, one such site has spent years in preparation, its backers wagering that if you build the infrastructure, the transformative employer will come. Recent commitments suggest the bet is paying off.

The Triad, long overshadowed by Charlotte and the Triangle, sees the projects as a chance to reclaim its manufacturing stature.

## Who captures the upside

Economists urge caution. Megasite incentives are expensive, and the promised jobs sometimes go to workers imported from elsewhere. The public cost per position can be startling.

The question is not whether the megasite will bring investment — it already has — but whether the surrounding community will share fully in the returns.`,
  },
  {
    slug: "carolina-clean-energy-solar-supply-chain",
    title: "North Carolina's Clean-Energy Supply Chain Comes of Age",
    excerpt:
      "Once merely a solar-friendly state, the Carolinas are now manufacturing the panels, batteries and components of the energy transition.",
    date: "2025-03-11",
    credit: "Ingrid Solheim",
    body: `North Carolina has quietly ranked among the nation's solar leaders for years. What is new is that the state is beginning to build the hardware, not just install it.

## From adoption to production

A cluster of manufacturers now produces panels, battery components and grid equipment within state lines, drawn by federal incentives and a business-friendly climate.

The shift moves the Carolinas up the value chain, capturing the higher-margin work of making the energy transition rather than merely consuming it.

## Grid growing pains

The build-out is not without friction. Utilities and developers spar over interconnection, and rural communities debate the aesthetics of large installations.

Still, the trajectory is unmistakable. A state that embraced solar early is positioning itself to manufacture the future it helped pioneer.`,
  },
  {
    slug: "queen-city-office-market-return-to-work",
    title: "Charlotte's Office Towers Bet Big on the Return to Work",
    excerpt:
      "While other cities hollow out, uptown Charlotte is filling its floors — a contrarian wager that the office still matters, if you make it worth the commute.",
    date: "2024-12-18",
    credit: "Harper Lindquist",
    body: `The national narrative on offices is grim: empty towers, defaulting landlords, downtowns struggling to justify themselves. Charlotte is running the other way.

## A contrarian occupancy

Uptown's occupancy rates have outpaced most major metros, buoyed by banks and professional-services firms that never fully embraced remote work. New towers are rising even as coastal skylines empty.

Landlords have learned that the office must now earn the commute — with amenities, design and a sense of occasion that a spare bedroom cannot match.

## The flight to quality

The winners are the newest, best-appointed buildings; older stock struggles. Analysts call it a flight to quality, and Charlotte has plenty of quality to fly to.

Whether the wager holds through the next downturn is unknown. But for now, the Queen City is proving that the office is not dead — it simply had to get better.`,
  },
  {
    slug: "carolina-fintech-regulation-compliance",
    title: "The Compliance Advantage: Why Regulators Trust Carolina Fintech",
    excerpt:
      "In an industry synonymous with move-fast culture, the state's startups have found an unlikely edge in doing the boring things right.",
    date: "2024-12-05",
    credit: "Oscar Benedetti",
    body: `Fintech's reputation for cavalier risk-taking has soured many regulators. North Carolina's startups are quietly building a different brand.

## Boring on purpose

Staffed by veterans of the state's banking towers, many local fintech firms treat compliance not as an afterthought but as a selling point. They speak the regulators' language and design products to survive scrutiny from day one.

That posture wins them something rivals struggle to obtain: the trust of the institutions whose rails they depend on.

## A durable moat

Skeptics call it slow. Founders call it durable. In a sector where a single enforcement action can end a company overnight, the ability to sleep at night has real value.

The Carolina model suggests that in fintech's next chapter, the winners may be the ones who took the rules seriously all along.`,
  },
];

generate("business", articles);
