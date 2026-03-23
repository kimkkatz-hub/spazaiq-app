import { useState } from "react";

// ─── ALL 11 OFFICIAL SA LANGUAGES ───────────────────────────────────────────
const LANG = {
  en: {
    name: "English", flag: "🇬🇧",
    tagline: "AI Tools · Built for SA Township Business",
    live: "LIVE", tools_ready: "All tools ready",
    get_advice: "Get Stock Advice", thinking: "Thinking...",
    cash_label: "Cash Available to Spend (R)",
    location_label: "Location", size_label: "Shop Size", focus_label: "Main Focus",
    results_here: "Stock recommendations will appear here",
    avoid_now: "Avoid Right Now", suggested_stock: "Suggested Stock List",
    total_spend: "Total Suggested Spend",
    error_unreadable: "AI returned an unreadable response. Please try again.",
    server_url_label: "API Server URL",
  },
  zu: {
    name: "isiZulu", flag: "🇿🇦",
    tagline: "Amathuluzi e-AI · Akhiwe Ngamashop aseNingizimu Afrika",
    live: "IYASEBENZA", tools_ready: "Wonke amathuluzi alungile",
    get_advice: "Thola Iseluleko Sezimpahla", thinking: "Iyacabanga...",
    cash_label: "Imali Ekhona Ukuchitha (R)",
    location_label: "Indawo", size_label: "Usayizi Wesitolo", focus_label: "Umgomo Oyinhloko",
    results_here: "Izincomo zezimpahla zizovelela lapha",
    avoid_now: "Gwema Manje", suggested_stock: "Uhlu Lwezimpahla Oluhlongoziwe",
    total_spend: "Isilinganiso Sokuchipha",
    error_unreadable: "I-AI ibuyisele impendulo engafundeki. Zama futhi.",
    server_url_label: "I-URL Yeseva se-API",
  },
  xh: {
    name: "isiXhosa", flag: "🇿🇦",
    tagline: "Izixhobo ze-AI · Zakhiwe Ngeeshoplolo zase-SA",
    live: "IYASEBENZA", tools_ready: "Zonke izixhobo zilungile",
    get_advice: "Fumana Ingcebiso Yezinto", thinking: "Icinga...",
    cash_label: "Imali Ekhoyo Ukuchitha (R)",
    location_label: "Indawo", size_label: "Ubungakanani Bevenkile", focus_label: "Injongo Eyintloko",
    results_here: "Iingcebiso zezinto ziya kubonakala apha",
    avoid_now: "Gwema Ngoku", suggested_stock: "Uluhlu Lwezinto Olucetyiswayo",
    total_spend: "Isilinganiso Sokuchipha",
    error_unreadable: "I-AI ibuyisele impendulo engafundekiyo. Zama kwakhona.",
    server_url_label: "I-URL Yeseva ye-API",
  },
  st: {
    name: "Sesotho", flag: "🇿🇦",
    tagline: "Didirisiwa tsa AI · Bakeng sa Mabenkeleng a SA",
    live: "E SEBETSA", tools_ready: "Didirisiwa tsohle di itokiselitse",
    get_advice: "Fumana Keletso ya Thepa", thinking: "E nahana...",
    cash_label: "Chelete e Fumanehang ho Porisa (R)",
    location_label: "Sebaka", size_label: "Boholo ba Lebenkele", focus_label: "Sepheo se Seholo",
    results_here: "Dikhomelo tsa thepa di tla hlaha mona",
    avoid_now: "Qoba Hajoale", suggested_stock: "Lethathamo la Thepa e Khothalletswang",
    total_spend: "Kakaretso ya Chelete",
    error_unreadable: "AI e ile ea khutlisa karabo e sa baleheng. Leka hape.",
    server_url_label: "URL ya Seva ya API",
  },
  tn: {
    name: "Setswana", flag: "🇿🇦",
    tagline: "Didirisiwa tsa AI · Tsa Dikgwebo tsa Motse wa SA",
    live: "E DIRA", tools_ready: "Didirisiwa tsotlhe di siametse",
    get_advice: "Bona Kgakololo ya Thepa", thinking: "E akanya...",
    cash_label: "Madi a Gona go Reka (R)",
    location_label: "Lefelo", size_label: "Bogolo jwa Lebenkele", focus_label: "Maikaelelo a Magolo",
    results_here: "Dikatlenegelo tsa thepa di tla bontshiwa fano",
    avoid_now: "Thibela Jaanong", suggested_stock: "Lenaane la Thepa e Atlenegiwang",
    total_spend: "Palalo ya Madi",
    error_unreadable: "AI e busitse karabo e e sa kgoneng go balwa. Leka gape.",
    server_url_label: "URL ya Seva ya API",
  },
  nso: {
    name: "Sepedi", flag: "🇿🇦",
    tagline: "Didirišwa tša AI · Tša Dikgwebo tša Motse wa SA",
    live: "E ŠOMA", tools_ready: "Didirišwa ka moka di lokišitšwe",
    get_advice: "Hwetša Keletšo ya Thepa", thinking: "E nagana...",
    cash_label: "Melete ye e Lego gona go Reka (R)",
    location_label: "Lefelo", size_label: "Bogolo bja Lebenkele", focus_label: "Maikaelelo a Magolo",
    results_here: "Dikatlenegelo tša thepa di tla bonagala mo",
    avoid_now: "Efoga Bjale", suggested_stock: "Lenaneotlalo la Thepa ye e Atlenegwago",
    total_spend: "Palalo ya Melete",
    error_unreadable: "AI e bušeditše karabo yeo e sa kgonego go balwa. Leka gape.",
    server_url_label: "URL ya Seva ya API",
  },
  ve: {
    name: "Tshivenḓa", flag: "🇿🇦",
    tagline: "Zwishumiswa zwa AI · Zwi Vhiliwaho Zwi SA Township",
    live: "I SHUMA", tools_ready: "Zwishumiswa zwose zwi lungele",
    get_advice: "Wana Ndaedzo ya Zwithu", thinking: "I humbula...",
    cash_label: "Tshelede ye re nayo u renga (R)",
    location_label: "Nḓowelo", size_label: "Bogolo bwa Shopo", focus_label: "Ndingosi ya ntha",
    results_here: "Zwindaedzo zwa zwithu zwi ḓo vhonala afha",
    avoid_now: "Dziḓela Zwino", suggested_stock: "Luvhandu lwa Zwithu zwi Fhirisiwaho",
    total_spend: "Palalo ya Tshelede",
    error_unreadable: "AI yo vhuya na mhindulo i sa koni u vhalwa. Linga hafhu.",
    server_url_label: "URL ya Seva ya API",
  },
  ts: {
    name: "Xitsonga", flag: "🇿🇦",
    tagline: "Swileriso swa AI · Swi Akiwe Swin'we na Miganga ya SA",
    live: "I TIRHA", tools_ready: "Swileriso hinkwaswo swi lungele",
    get_advice: "Kuma Switsundzuxo swa Swilo", thinking: "I ehleketa...",
    cash_label: "Timali leti nga kona ku xava (R)",
    location_label: "Ndhawu", size_label: "Ntalo wa Xitolo", focus_label: "Xikongomelo xa ntlawa",
    results_here: "Switsundzuxo swa swilo swi ta boneka laha",
    avoid_now: "Tiyisa Sweswi", suggested_stock: "Luhelo lwa Swilo leswi Tsundzuxiwaka",
    total_spend: "Palalo ya Timali",
    error_unreadable: "AI yi burisile nhlamulo leyi nga koteki ku hlayiwa. Ringeta nakambe.",
    server_url_label: "URL ya Seva ya API",
  },
  ss: {
    name: "siSwati", flag: "🇿🇦",
    tagline: "Tichwazi te AI · Takhiwe Ngetitolo te SA",
    live: "IYASEBENTA", tools_ready: "Tichwazi tonkhe tilungele",
    get_advice: "Thola Seluleko Setidzalo", thinking: "Iyacabanga...",
    cash_label: "Imali Lekhona Kuchipha (R)",
    location_label: "Indzawo", size_label: "Bukhulu Besitolo", focus_label: "Inhloso Lenkhulu",
    results_here: "Tincomo tetidzalo titavela lapha",
    avoid_now: "Gwema Manje", suggested_stock: "Uhlu Lwetidzalo Loluhlongoziwe",
    total_spend: "Inani Lelichithiwe",
    error_unreadable: "I-AI ibuyisele impendulo lengafundeki. Zama futsi.",
    server_url_label: "URL yeSeva ye-API",
  },
  nr: {
    name: "isiNdebele", flag: "🇿🇦",
    tagline: "Izinto ze-AI · Ezikhiwe Ngesitolo seNingizimu Afrika",
    live: "IYASEBENZA", tools_ready: "Izinto zonke zilungele",
    get_advice: "Thola Iseluleko Sezimpahla", thinking: "Iyacabanga...",
    cash_label: "Imali Ekhona Ukuchitha (R)",
    location_label: "Indawo", size_label: "Ubukulu Besitolo", focus_label: "Umgomo Omkhulu",
    results_here: "Izincomo zezimpahla zizovelela lapha",
    avoid_now: "Gwema Manje", suggested_stock: "Uhlu Lwezimpahla Oluhlongoziwe",
    total_spend: "Isilinganiso Sokuchipha",
    error_unreadable: "I-AI ibuyisele impendulo engafundeki. Zama futhi.",
    server_url_label: "I-URL Yeseva ye-API",
  },
  af: {
    name: "Afrikaans", flag: "🇿🇦",
    tagline: "KI-gereedskap · Gebou vir SA Dorpssake",
    live: "LEWENDIG", tools_ready: "Alle gereedskap gereed",
    get_advice: "Kry Voorraadadvies", thinking: "Dink...",
    cash_label: "Kontant Beskikbaar om te Spandeer (R)",
    location_label: "Ligging", size_label: "Winkelgrootte", focus_label: "Hooffokus",
    results_here: "Voorraadaanbevelings sal hier verskyn",
    avoid_now: "Vermy Nou", suggested_stock: "Voorgestelde Voorraadlys",
    total_spend: "Totale Voorgestelde Besteding",
    error_unreadable: "KI het 'n onleesbare reaksie teruggegee. Probeer asseblief weer.",
    server_url_label: "API-bediener URL",
  },
};

const TOOLS = [
  { id: "stockorder", icon: "📦", label: "Stock Advisor",        group: "Daily Operations" },
  { id: "pricing",    icon: "🏷️", label: "Pricing Calculator",   group: "Daily Operations" },
  { id: "cashflow",   icon: "💵", label: "Cash Flow Tracker",    group: "Daily Operations" },
  { id: "supplier",   icon: "🤝", label: "Supplier Negotiator",  group: "Daily Operations" },
  { id: "profit",     icon: "📊", label: "Daily Profit Tracker", group: "Daily Operations" },
  { id: "loadshed",   icon: "⚡", label: "Load Shedding Planner",group: "Daily Operations" },
  { id: "stokvel",    icon: "💰", label: "Stokvel Manager",      group: "Daily Operations" },
  { id: "competitor", icon: "🏪", label: "Competitor Prices",    group: "Daily Operations" },
  { id: "whatsapp",   icon: "📱", label: "WhatsApp Orders",      group: "Daily Operations" },
  { id: "sars",       icon: "🧾", label: "SARS Tax Helper",      group: "Compliance & Legal" },
  { id: "uif",        icon: "🛡️", label: "UIF Registration",     group: "Compliance & Legal" },
  { id: "cipc",       icon: "📋", label: "CIPC Guide",           group: "Compliance & Legal" },
  { id: "license",    icon: "🪪", label: "Business Licence",     group: "Compliance & Legal" },
  { id: "loan",       icon: "🏦", label: "Loan Eligibility",     group: "Growth & Finance" },
  { id: "grant",      icon: "🎯", label: "Grant Finder",         group: "Growth & Finance" },
  { id: "expand",     icon: "🚀", label: "Growth Advisor",       group: "Growth & Finance" },
];

const PROMPTS = {
  stockorder: `You are a South African spaza shop business advisor. Return JSON ONLY, no other text: {"top_items":[{"product":"","reason":"","suggested_qty":0,"avg_cost_each":0,"markup_percent":0}],"avoid_now":[{"product":"","reason":""}],"total_suggested_spend":0,"cash_tip":"","seasonal_tip":"","summary":""}`,
  pricing:    `You are a SA spaza shop pricing advisor. Return JSON ONLY: {"pricing_strategy":"","items":[{"product":"","buy_price_estimate":0,"suggested_sell_price":0,"margin_percent":0,"note":""}],"vat_note":"","competitor_tip":"","monthly_revenue_estimate":0,"summary":""}`,
  cashflow:   `You are a SA township cash flow advisor. Return JSON ONLY: {"health_score":75,"health_status":"GOOD","daily_targets":[{"day_type":"","target_sales":0,"reason":""}],"risks":[{"risk":"","impact":"HIGH","fix":""}],"tips":[],"paydays_strategy":"","credit_advice":"","summary":""}`,
  supplier:   `You are a SA spaza supplier negotiation coach. Return JSON ONLY: {"negotiation_tips":[{"tip":"","script_line":"","expected_saving":0}],"wholesaler_comparison":[{"name":"","best_for":"","pros":"","cons":""}],"credit_advice":"","bulk_items_worth_buying":[],"avoid_on_credit":[],"monthly_saving_potential":0,"summary":""}`,
  sars:       `You are a SA SARS tax advisor. Return JSON ONLY: {"tax_type_applicable":"TURNOVER_TAX","estimated_annual_tax":0,"registration_required":[{"tax":"","threshold":"","steps":""}],"records_to_keep":[],"deductions_allowed":[],"filing_deadlines":[{"period":"","deadline":""}],"efiling_steps":[],"summary":""}`,
  uif:        `You are a SA UIF advisor. Return JSON ONLY: {"must_register":true,"monthly_contribution":0,"registration_steps":[{"step":"","where":"","what":""}],"benefits":[],"penalties_if_not_registered":"","domestic_worker_rules":"","online_registration_url":"","summary":""}`,
  cipc:       `You are a SA CIPC advisor. Return JSON ONLY: {"recommended_structure":"","reason":"","registration_steps":[{"step":"","cost":0,"timeframe":"","where":""}],"documents_needed":[],"annual_requirements":[],"name_reservation_tip":"","cost_total":0,"trading_name_vs_company_name":"","summary":""}`,
  license:    `You are a SA business licensing advisor. Return JSON ONLY: {"licences_needed":[{"licence":"","issuing_body":"","cost_estimate":0,"timeframe":"","documents_required":[]}],"total_cost_estimate":0,"operating_without_risk":"","tips":[],"renewal_schedule":[{"licence":"","renewal_period":""}],"summary":""}`,
  loan:       `You are a SA small business loan advisor. Return JSON ONLY: {"eligibility_score":70,"recommended_options":[{"lender":"","product":"","amount_range":"","interest_rate":"","requirements":"","pros":"","cons":""}],"avoid":[{"lender":"","reason":""}],"documents_needed":[],"tips_to_improve_eligibility":[],"warning":"","summary":""}`,
  grant:      `You are a SA small business grant advisor. Return JSON ONLY: {"available_grants":[{"name":"","funder":"","amount":"","eligibility":"","deadline":"","apply_at":"","difficulty":"EASY"}],"best_match":"","total_available":"","application_tips":[],"documents_needed":[],"warning_about_scams":"","summary":""}`,
  expand:     `You are a SA township business growth advisor. Return JSON ONLY: {"growth_score":70,"quick_wins":[{"idea":"","cost_to_start":0,"monthly_revenue_potential":0,"difficulty":"EASY"}],"medium_term":[{"idea":"","investment_needed":0,"timeline":"","potential":""}],"risks":[],"recommended_first_step":"","funding_options":[],"summary":""}`,
  loadshed:   `You are a SA spaza shop advisor helping owners plan for load shedding. Return JSON ONLY: {"urgency":"MEDIUM","stock_now":[{"product":"","reason":"","qty_to_stock":"","markup_opportunity":true}],"avoid_stocking":[{"product":"","reason":""}],"operational_tips":[],"generator_advice":"","cash_handling_tip":"","customer_tip":"","estimated_extra_daily_revenue":"","summary":""}`,
  competitor: `You are a SA spaza shop competitive pricing advisor. Return JSON ONLY: {"overall_strategy":"","pricing_responses":[{"product":"","competitor_price":"","recommended_spaza_price":"","action":"MATCH","reason":"","margin_percent":""}],"payday_tips":[],"loss_leader_suggestions":[],"products_to_promote_this_week":[],"estimated_revenue_impact":"","summary":""}`,
  whatsapp:   `You are a SA spaza shop WhatsApp order assistant. Return JSON ONLY: {"whatsapp_message":"","follow_up_message":"","negotiation_line":"","supplier_tips":[],"summary":""}`,
};

async function callClaude(system, message, serverUrl) {
  const url = (serverUrl || "https://spazaiq-server-production.up.railway.app").replace(/\/$/, "");
  const res = await fetch(`${url}/api/ask`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ system, message }),
  });
  if (!res.ok) {
    const e = await res.json().catch(() => ({}));
    throw new Error(e?.error || `Server error ${res.status}`);
  }
  const data = await res.json();
  if (!data.text) throw new Error("Empty response from server.");
  return data.text;
}

function parseJSON(raw) {
  if (!raw) return null;
  let cleaned = raw.replace(/```json\s*/gi, "").replace(/```\s*/g, "").trim();
  try { return JSON.parse(cleaned); } catch {}
  const match = cleaned.match(/\{[\s\S]*\}/);
  if (match) { try { return JSON.parse(match[0]); } catch {} }
  return null;
}

const BG = "#0a1628"; const CARD = "#0d1e35"; const BORDER = "#1a3050";
const ACC = "#f59e0b"; const ACC2 = "#22c55e";
const TEXT = "#e2e8f0"; const MUTED = "#64748b"; const DIM = "#334155";
const IMP = { HIGH: "#ef4444", MEDIUM: "#f59e0b", LOW: ACC2, EASY: ACC2, HARD: "#ef4444" };

function Field({ label, value, onChange, placeholder, options, rows }) {
  const s = { width: "100%", background: "#070f1d", border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 12px", color: TEXT, fontSize: 14, boxSizing: "border-box", resize: rows ? "vertical" : undefined };
  return (
    <div style={{ marginBottom: 10 }}>
      <div style={{ fontSize: 10, color: MUTED, marginBottom: 4, textTransform: "uppercase", letterSpacing: 1.5 }}>{label}</div>
      {options ? <select value={value} onChange={e => onChange(e.target.value)} style={s}>{options.map(o => <option key={o}>{o}</option>)}</select>
        : rows ? <textarea value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder} rows={rows} style={{ ...s, lineHeight: 1.6 }} />
          : <input value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder} style={s} />}
    </div>
  );
}
function Btn({ onClick, disabled, loading, children }) {
  return <button onClick={onClick} disabled={disabled || loading} style={{ width: "100%", marginTop: 12, background: disabled || loading ? DIM : `linear-gradient(135deg,${ACC},#d97706)`, border: "none", borderRadius: 10, padding: 13, color: disabled || loading ? MUTED : "#000", fontWeight: 700, fontSize: 14, cursor: disabled || loading ? "not-allowed" : "pointer" }}>{children}</button>;
}
function Dots() { return <div style={{ display: "flex", gap: 6, justifyContent: "center", padding: 48 }}>{[0,1,2].map(i => <div key={i} style={{ width: 8, height: 8, borderRadius: "50%", background: ACC, animation: "blink 1.2s infinite", animationDelay: `${i*.2}s` }} />)}</div>; }
function Card({ children, border }) { return <div style={{ background: CARD, border: `1px solid ${border||BORDER}`, borderRadius: 12, padding: 18, marginBottom: 12 }}>{children}</div>; }
function Tag({ text, color }) { return <span style={{ background: color+"22", color, border: `1px solid ${color}55`, borderRadius: 6, padding: "2px 8px", fontSize: 11, fontWeight: 700 }}>{text}</span>; }
function Row({ children }) { return <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 18 }}>{children}</div>; }
function Col({ children }) { return <div>{children}</div>; }
function Err({ msg }) { return <div style={{ background: "#1a0a0a", border: "1px solid #ef444455", borderRadius: 10, padding: 14, color: "#ef4444", fontSize: 13 }}>⚠️ {msg}</div>; }
function Empty({ text }) { return <div style={{ textAlign: "center", padding: 40, color: DIM, fontSize: 13 }}>{text || "Results will appear here"}</div>; }
function SH({ text }) { return <div style={{ fontSize: 10, color: ACC, textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 8, fontWeight: 700 }}>{text}</div>; }

// ─── ORIGINAL 11 TOOLS ───────────────────────────────────────────────────────
function StockAdvisor({ serverUrl, t }) {
  const [f, setF] = useState({ cash: "", location: "Soweto", size: "Small (1 room)", focus: "General groceries" });
  const [res, setRes] = useState(null); const [load, setLoad] = useState(false); const [err, setErr] = useState(null);
  const s = k => v => setF(p => ({ ...p, [k]: v }));
  async function go() { setLoad(true); setRes(null); setErr(null); try { const _r = parseJSON(await callClaude(PROMPTS.stockorder, `Cash: R${f.cash}, Location: ${f.location}, Size: ${f.size}, Focus: ${f.focus}`, serverUrl)); if (!_r) throw new Error(t.error_unreadable); setRes(_r); } catch (e) { setErr(e?.message); } setLoad(false); }
  return (<Row><Col>
    <Field label={t.cash_label} value={f.cash} onChange={s("cash")} placeholder="e.g. 3000" />
    <Field label={t.location_label} value={f.location} onChange={s("location")} options={["Soweto","Khayelitsha","Mamelodi","Mitchell's Plain","Tembisa","Umlazi","Kwa-Mashu","Other township"]} />
    <Field label={t.size_label} value={f.size} onChange={s("size")} options={["Very small (kiosk)","Small (1 room)","Medium (2 rooms)","Large (container/shop)"]} />
    <Field label={t.focus_label} value={f.focus} onChange={s("focus")} options={["General groceries","Cold drinks & snacks","Airtime & electricity","Fresh produce","Household goods","Everything"]} />
    <Btn onClick={go} disabled={!f.cash} loading={load}>{load ? `📦 ${t.thinking}` : `📦 ${t.get_advice}`}</Btn>
  </Col><Col>
    {load && <Dots />}
    {res && !load && <div>
      <Card><SH text={t.suggested_stock} />
        {res.top_items?.map((item, i) => <div key={i} style={{ borderBottom: `1px solid ${BORDER}`, paddingBottom: 10, marginBottom: 10 }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}><span style={{ color: TEXT, fontWeight: 600 }}>{item.product}</span><Tag text={`${item.markup_percent}% margin`} color={ACC2} /></div>
          <div style={{ color: MUTED, fontSize: 12 }}>Qty: {item.suggested_qty} · Cost: R{item.avg_cost_each} each</div>
          <div style={{ color: "#94a3b8", fontSize: 12, marginTop: 3 }}>{item.reason}</div>
        </div>)}
        <div style={{ marginTop: 8, padding: 10, background: "#052e16", borderRadius: 8 }}><span style={{ color: MUTED, fontSize: 12 }}>{t.total_spend}: </span><span style={{ color: ACC2, fontWeight: 700 }}>R{res.total_suggested_spend}</span></div>
      </Card>
      {res.avoid_now?.length > 0 && <Card border="#ef444455"><SH text={t.avoid_now} />{res.avoid_now.map((a, i) => <div key={i} style={{ color: "#ef4444", fontSize: 13, marginBottom: 6 }}>✗ {a.product} — <span style={{ color: MUTED }}>{a.reason}</span></div>)}</Card>}
      {res.cash_tip && <Card><div style={{ color: ACC, fontSize: 13 }}>💡 {res.cash_tip}</div></Card>}
    </div>}
    {err && !load && <Err msg={err} />}
    {!res && !err && !load && <Empty text={t.results_here} />}
  </Col></Row>);
}

function PricingCalc({ serverUrl, t }) {
  const [f, setF] = useState({ products: "", area: "Township with Shoprite nearby", competitors: "Shoprite nearby" });
  const [res, setRes] = useState(null); const [load, setLoad] = useState(false); const [err, setErr] = useState(null);
  const s = k => v => setF(p => ({ ...p, [k]: v }));
  async function go() { setLoad(true); setRes(null); setErr(null); try { const _r = parseJSON(await callClaude(PROMPTS.pricing, `Products: ${f.products}, Area: ${f.area}, Competition: ${f.competitors}`, serverUrl)); if (!_r) throw new Error(t.error_unreadable); setRes(_r); } catch (e) { setErr(e?.message); } setLoad(false); }
  return (<Row><Col>
    <Field label="Products You Sell" value={f.products} onChange={s("products")} placeholder="e.g. Coke 2L, white bread, Simba chips..." rows={4} />
    <Field label="Area Type" value={f.area} onChange={s("area")} options={["Deep township (no nearby shops)","Township with Shoprite nearby","Township with Pick n Pay","Peri-urban","Informal settlement"]} />
    <Field label="Nearby Competition" value={f.competitors} onChange={s("competitors")} options={["No big stores nearby","Shoprite nearby","Pick n Pay nearby","Boxer nearby","Multiple big stores","Other spazas only"]} />
    <Btn onClick={go} disabled={!f.products} loading={load}>{load ? "🏷️ Calculating..." : "🏷️ Calculate Prices"}</Btn>
  </Col><Col>
    {load && <Dots />}
    {res && !load && <div>
      <Card><SH text="Pricing Strategy" /><div style={{ color: ACC, fontWeight: 600 }}>{res.pricing_strategy}</div></Card>
      <Card><SH text="Item Pricing" />{res.items?.map((item, i) => <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: `1px solid ${BORDER}` }}>
        <div><div style={{ color: TEXT, fontWeight: 600, fontSize: 13 }}>{item.product}</div><div style={{ color: MUTED, fontSize: 11 }}>Buy: R{item.buy_price_estimate}</div></div>
        <div style={{ textAlign: "right" }}><div style={{ color: ACC2, fontWeight: 700 }}>R{item.suggested_sell_price}</div><Tag text={`${item.margin_percent}%`} color={ACC} /></div>
      </div>)}</Card>
      {res.monthly_revenue_estimate && <Card border={`${ACC2}55`}><SH text="Est. Monthly Revenue" /><div style={{ color: ACC2, fontSize: 22, fontWeight: 800 }}>R{res.monthly_revenue_estimate}</div></Card>}
      {res.vat_note && <Card><div style={{ color: MUTED, fontSize: 12 }}>📋 {res.vat_note}</div></Card>}
    </div>}
    {err && !load && <Err msg={err} />}
    {!res && !err && !load && <Empty text="Pricing recommendations will appear here" />}
  </Col></Row>);
}

function CashFlow({ serverUrl, t }) {
  const [f, setF] = useState({ daily_sales: "", daily_costs: "", credit: "Yes", rent: "Yes", rent_amount: "" });
  const [res, setRes] = useState(null); const [load, setLoad] = useState(false); const [err, setErr] = useState(null);
  const s = k => v => setF(p => ({ ...p, [k]: v }));
  async function go() { setLoad(true); setRes(null); setErr(null); try { const _r = parseJSON(await callClaude(PROMPTS.cashflow, `Daily sales: R${f.daily_sales}, Daily costs: R${f.daily_costs}, Gives credit: ${f.credit}, Pays rent: ${f.rent}${f.rent_amount ? ` R${f.rent_amount}/month` : ""}`, serverUrl)); if (!_r) throw new Error(t.error_unreadable); setRes(_r); } catch (e) { setErr(e?.message); } setLoad(false); }
  const HC = { GOOD: ACC2, FAIR: ACC, AT_RISK: "#ef4444" };
  return (<Row><Col>
    <Field label="Average Daily Sales (R)" value={f.daily_sales} onChange={s("daily_sales")} placeholder="e.g. 800" />
    <Field label="Daily Stock Costs (R)" value={f.daily_costs} onChange={s("daily_costs")} placeholder="e.g. 500" />
    <Field label="Do You Give Credit?" value={f.credit} onChange={s("credit")} options={["Yes","No","Sometimes"]} />
    <Field label="Do You Pay Rent?" value={f.rent} onChange={s("rent")} options={["Yes","No - own place","No - government site"]} />
    {f.rent === "Yes" && <Field label="Monthly Rent (R)" value={f.rent_amount} onChange={s("rent_amount")} placeholder="e.g. 1500" />}
    <Btn onClick={go} disabled={!f.daily_sales} loading={load}>{load ? "💵 Analysing..." : "💵 Analyse Cash Flow"}</Btn>
  </Col><Col>
    {load && <Dots />}
    {res && !load && <div>
      <Card border={`${HC[res.health_status]}55`}><div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{ fontSize: 32, fontWeight: 800, color: HC[res.health_status] }}>{res.health_score}</div>
        <div><Tag text={res.health_status?.replace("_"," ")} color={HC[res.health_status]} /><div style={{ color: MUTED, fontSize: 11, marginTop: 4 }}>Business Health Score</div></div>
      </div></Card>
      <Card><SH text="Daily Sales Targets" />{res.daily_targets?.map((d, i) => <div key={i} style={{ padding: "6px 0", borderBottom: `1px solid ${BORDER}` }}><span style={{ color: TEXT, fontWeight: 600, fontSize: 13 }}>{d.day_type}:</span> <span style={{ color: ACC2, fontWeight: 700 }}>R{d.target_sales}</span><div style={{ color: MUTED, fontSize: 11 }}>{d.reason}</div></div>)}</Card>
      {res.credit_advice && <Card border={`${ACC}55`}><SH text="Credit Warning" /><div style={{ color: ACC, fontSize: 13 }}>{res.credit_advice}</div></Card>}
      <Card><SH text="Top Risks" />{res.risks?.map((r, i) => <div key={i} style={{ marginBottom: 8, paddingBottom: 8, borderBottom: `1px solid ${BORDER}` }}><div style={{ display: "flex", justifyContent: "space-between" }}><span style={{ color: TEXT, fontSize: 13 }}>{r.risk}</span><Tag text={r.impact} color={IMP[r.impact]} /></div><div style={{ color: ACC2, fontSize: 12, marginTop: 3 }}>→ {r.fix}</div></div>)}</Card>
    </div>}
    {err && !load && <Err msg={err} />}
    {!res && !err && !load && <Empty text="Cash flow analysis will appear here" />}
  </Col></Row>);
}

function SupplierNeg({ serverUrl, t }) {
  const [f, setF] = useState({ suppliers: "Makro", monthly_spend: "", main_products: "" });
  const [res, setRes] = useState(null); const [load, setLoad] = useState(false); const [err, setErr] = useState(null);
  const s = k => v => setF(p => ({ ...p, [k]: v }));
  async function go() { setLoad(true); setRes(null); setErr(null); try { const _r = parseJSON(await callClaude(PROMPTS.supplier, `Supplier: ${f.suppliers}, Monthly spend: R${f.monthly_spend}, Products: ${f.main_products}`, serverUrl)); if (!_r) throw new Error(t.error_unreadable); setRes(_r); } catch (e) { setErr(e?.message); } setLoad(false); }
  return (<Row><Col>
    <Field label="Where Do You Buy Stock?" value={f.suppliers} onChange={s("suppliers")} options={["Makro","Jumbo Cash & Carry","Metro Cash & Carry","Local wholesaler/rep","Mix of suppliers","Shoprite/Boxer (resell)"]} />
    <Field label="Monthly Stock Spend (R)" value={f.monthly_spend} onChange={s("monthly_spend")} placeholder="e.g. 8000" />
    <Field label="Main Products You Buy" value={f.main_products} onChange={s("main_products")} placeholder="e.g. cold drinks, chips, bread..." rows={3} />
    <Btn onClick={go} disabled={!f.monthly_spend} loading={load}>{load ? "🤝 Negotiating..." : "🤝 Get Negotiation Tips"}</Btn>
  </Col><Col>
    {load && <Dots />}
    {res && !load && <div>
      {res.monthly_saving_potential && <Card border={`${ACC2}55`}><SH text="Potential Monthly Saving" /><div style={{ color: ACC2, fontSize: 22, fontWeight: 800 }}>R{res.monthly_saving_potential}</div></Card>}
      <Card><SH text="Negotiation Scripts" />{res.negotiation_tips?.map((tip, i) => <div key={i} style={{ marginBottom: 12, paddingBottom: 12, borderBottom: `1px solid ${BORDER}` }}><div style={{ color: TEXT, fontWeight: 600, fontSize: 13, marginBottom: 4 }}>{tip.tip}</div><div style={{ color: ACC, fontSize: 12, fontStyle: "italic", marginBottom: 3 }}>Say: "{tip.script_line}"</div><div style={{ color: ACC2, fontSize: 12 }}>Saving: R{tip.expected_saving}/month</div></div>)}</Card>
      <Card><SH text="Wholesaler Comparison" />{res.wholesaler_comparison?.map((w, i) => <div key={i} style={{ marginBottom: 10 }}><div style={{ color: ACC, fontWeight: 700, fontSize: 13 }}>{w.name}</div><div style={{ color: MUTED, fontSize: 12 }}>Best for: {w.best_for}</div><div style={{ color: ACC2, fontSize: 12 }}>✓ {w.pros}</div><div style={{ color: "#ef4444", fontSize: 12 }}>✗ {w.cons}</div></div>)}</Card>
    </div>}
    {err && !load && <Err msg={err} />}
    {!res && !err && !load && <Empty text="Supplier tips will appear here" />}
  </Col></Row>);
}

function SarsTax({ serverUrl, t }) {
  const [f, setF] = useState({ annual_turnover: "", has_staff: "No - just me", years_operating: "1-2 years" });
  const [res, setRes] = useState(null); const [load, setLoad] = useState(false); const [err, setErr] = useState(null);
  const s = k => v => setF(p => ({ ...p, [k]: v }));
  async function go() { setLoad(true); setRes(null); setErr(null); try { const _r = parseJSON(await callClaude(PROMPTS.sars, `Annual turnover: R${f.annual_turnover}, Employees: ${f.has_staff}, Years: ${f.years_operating}`, serverUrl)); if (!_r) throw new Error(t.error_unreadable); setRes(_r); } catch (e) { setErr(e?.message); } setLoad(false); }
  return (<Row><Col>
    <Field label="Estimated Annual Turnover (R)" value={f.annual_turnover} onChange={s("annual_turnover")} placeholder="e.g. 450000" />
    <Field label="Do You Have Employees?" value={f.has_staff} onChange={s("has_staff")} options={["No - just me","Yes - 1 helper","Yes - 2-5 staff"]} />
    <Field label="Years in Business" value={f.years_operating} onChange={s("years_operating")} options={["Just starting","Less than 1 year","1-2 years","3-5 years","5+ years"]} />
    <Btn onClick={go} disabled={!f.annual_turnover} loading={load}>{load ? "🧾 Checking..." : "🧾 Check My Tax Obligations"}</Btn>
  </Col><Col>
    {load && <Dots />}
    {res && !load && <div>
      <Card border={`${ACC}55`}><SH text="Tax Type That Applies to You" /><div style={{ color: ACC, fontWeight: 800, fontSize: 18 }}>{res.tax_type_applicable?.replace(/_/g," ")}</div><div style={{ color: ACC2, marginTop: 6, fontWeight: 700 }}>Est. Annual Tax: R{res.estimated_annual_tax}</div></Card>
      {res.registration_required?.length > 0 && <Card><SH text="What You Need to Register" />{res.registration_required.map((r, i) => <div key={i} style={{ marginBottom: 10, paddingBottom: 10, borderBottom: `1px solid ${BORDER}` }}><div style={{ color: TEXT, fontWeight: 600 }}>{r.tax}</div><div style={{ color: MUTED, fontSize: 12 }}>Threshold: {r.threshold}</div><div style={{ color: ACC2, fontSize: 12, marginTop: 4 }}>{r.steps}</div></div>)}</Card>}
      <Card><SH text="Records to Keep" />{res.records_to_keep?.map((r, i) => <div key={i} style={{ color: MUTED, fontSize: 13, marginBottom: 4 }}>📁 {r}</div>)}</Card>
      {res.deductions_allowed?.length > 0 && <Card><SH text="Deductions Allowed" />{res.deductions_allowed.map((d, i) => <div key={i} style={{ color: ACC2, fontSize: 13, marginBottom: 4 }}>✓ {d}</div>)}</Card>}
    </div>}
    {err && !load && <Err msg={err} />}
    {!res && !err && !load && <Empty text="Tax information will appear here" />}
  </Col></Row>);
}

function UifReg({ serverUrl, t }) {
  const [f, setF] = useState({ num_employees: "1", monthly_wage: "", own_income: "" });
  const [res, setRes] = useState(null); const [load, setLoad] = useState(false); const [err, setErr] = useState(null);
  const s = k => v => setF(p => ({ ...p, [k]: v }));
  async function go() { setLoad(true); setRes(null); setErr(null); try { const _r = parseJSON(await callClaude(PROMPTS.uif, `Employees: ${f.num_employees}, Monthly wage: R${f.monthly_wage}, Owner income: R${f.own_income}`, serverUrl)); if (!_r) throw new Error(t.error_unreadable); setRes(_r); } catch (e) { setErr(e?.message); } setLoad(false); }
  return (<Row><Col>
    <Field label="Number of Employees" value={f.num_employees} onChange={s("num_employees")} options={["0 - just me","1","2","3","4-5"]} />
    <Field label="Monthly Wage per Employee (R)" value={f.monthly_wage} onChange={s("monthly_wage")} placeholder="e.g. 3500" />
    <Field label="Your Monthly Income (R)" value={f.own_income} onChange={s("own_income")} placeholder="e.g. 8000" />
    <Btn onClick={go} disabled={!f.own_income} loading={load}>{load ? "🛡️ Checking..." : "🛡️ Check UIF Requirements"}</Btn>
  </Col><Col>
    {load && <Dots />}
    {res && !load && <div>
      <Card border={res.must_register ? `${ACC}55` : `${ACC2}55`}>
        <div style={{ fontWeight: 800, fontSize: 16, color: res.must_register ? ACC : ACC2 }}>{res.must_register ? "⚠️ You Must Register for UIF" : "✓ UIF Not Required Yet"}</div>
        {res.monthly_contribution && <div style={{ color: TEXT, marginTop: 8 }}>Monthly contribution: <span style={{ color: ACC, fontWeight: 700 }}>R{res.monthly_contribution}</span></div>}
        {res.penalties_if_not_registered && <div style={{ color: "#ef4444", fontSize: 12, marginTop: 6 }}>Penalty: {res.penalties_if_not_registered}</div>}
      </Card>
      {res.registration_steps && <Card><SH text="How to Register" />{res.registration_steps.map((step, i) => <div key={i} style={{ marginBottom: 10, paddingBottom: 10, borderBottom: `1px solid ${BORDER}` }}><div style={{ color: ACC, fontWeight: 600, fontSize: 13 }}>Step {i+1}: {step.step}</div><div style={{ color: MUTED, fontSize: 12 }}>Where: {step.where}</div><div style={{ color: TEXT, fontSize: 12 }}>What: {step.what}</div></div>)}</Card>}
      {res.benefits && <Card><SH text="Your UIF Benefits" />{res.benefits.map((b, i) => <div key={i} style={{ color: ACC2, fontSize: 13, marginBottom: 4 }}>✓ {b}</div>)}</Card>}
    </div>}
    {err && !load && <Err msg={err} />}
    {!res && !err && !load && <Empty text="UIF information will appear here" />}
  </Col></Row>);
}

function CipcGuide({ serverUrl, t }) {
  const [f, setF] = useState({ business_type: "Spaza shop", annual_turnover: "", has_partners: "No - just me", years_plan: "5+ years" });
  const [res, setRes] = useState(null); const [load, setLoad] = useState(false); const [err, setErr] = useState(null);
  const s = k => v => setF(p => ({ ...p, [k]: v }));
  async function go() { setLoad(true); setRes(null); setErr(null); try { const _r = parseJSON(await callClaude(PROMPTS.cipc, `Business: ${f.business_type}, Turnover: R${f.annual_turnover}, Partners: ${f.has_partners}, Plan: ${f.years_plan}`, serverUrl)); if (!_r) throw new Error(t.error_unreadable); setRes(_r); } catch (e) { setErr(e?.message); } setLoad(false); }
  return (<Row><Col>
    <Field label="Type of Business" value={f.business_type} onChange={s("business_type")} options={["Spaza shop","General dealer","Tuck shop","Tavern/shebeen","Food stall","Mobile trader"]} />
    <Field label="Annual Turnover (R)" value={f.annual_turnover} onChange={s("annual_turnover")} placeholder="e.g. 300000" />
    <Field label="Do You Have Business Partners?" value={f.has_partners} onChange={s("has_partners")} options={["No - just me","Yes - family partner","Yes - business partner"]} />
    <Field label="How Long Do You Plan to Operate?" value={f.years_plan} onChange={s("years_plan")} options={["Just testing","1-2 years","5+ years","Lifetime business"]} />
    <Btn onClick={go} disabled={!f.annual_turnover} loading={load}>{load ? "📋 Advising..." : "📋 Get Registration Advice"}</Btn>
  </Col><Col>
    {load && <Dots />}
    {res && !load && <div>
      <Card border={`${ACC}55`}><SH text="Recommended Structure" /><div style={{ color: ACC, fontWeight: 800, fontSize: 18 }}>{res.recommended_structure}</div><div style={{ color: TEXT, fontSize: 13, marginTop: 6 }}>{res.reason}</div><div style={{ color: ACC2, marginTop: 8 }}>Total cost: <strong>R{res.cost_total}</strong></div></Card>
      <Card><SH text="Registration Steps" />{res.registration_steps?.map((step, i) => <div key={i} style={{ marginBottom: 10, paddingBottom: 10, borderBottom: `1px solid ${BORDER}` }}><div style={{ display: "flex", justifyContent: "space-between" }}><span style={{ color: TEXT, fontWeight: 600 }}>Step {i+1}: {step.step}</span><Tag text={`R${step.cost}`} color={ACC} /></div><div style={{ color: MUTED, fontSize: 12 }}>{step.timeframe} · {step.where}</div></div>)}</Card>
      {res.documents_needed && <Card><SH text="Documents Needed" />{res.documents_needed.map((d, i) => <div key={i} style={{ color: TEXT, fontSize: 13, marginBottom: 4 }}>📄 {d}</div>)}</Card>}
    </div>}
    {err && !load && <Err msg={err} />}
    {!res && !err && !load && <Empty text="Registration advice will appear here" />}
  </Col></Row>);
}

function BizLicence({ serverUrl, t }) {
  const [f, setF] = useState({ business_type: "General spaza shop", municipality: "City of Joburg", sells_liquor: "No" });
  const [res, setRes] = useState(null); const [load, setLoad] = useState(false); const [err, setErr] = useState(null);
  const s = k => v => setF(p => ({ ...p, [k]: v }));
  async function go() { setLoad(true); setRes(null); setErr(null); try { const _r = parseJSON(await callClaude(PROMPTS.license, `Business: ${f.business_type}, Municipality: ${f.municipality}, Liquor: ${f.sells_liquor}`, serverUrl)); if (!_r) throw new Error(t.error_unreadable); setRes(_r); } catch (e) { setErr(e?.message); } setLoad(false); }
  return (<Row><Col>
    <Field label="Type of Business" value={f.business_type} onChange={s("business_type")} options={["General spaza shop","Spaza + cooked food","Spaza + airtime/electricity","Tavern/shebeen","Mobile food stall","Container shop"]} />
    <Field label="Your Municipality" value={f.municipality} onChange={s("municipality")} options={["City of Joburg","City of Cape Town","eThekwini (Durban)","Tshwane (Pretoria)","Ekurhuleni","Buffalo City (East London)","Mangaung (Bloemfontein)"]} />
    <Field label="Do You Sell Liquor?" value={f.sells_liquor} onChange={s("sells_liquor")} options={["No","Yes - already","Planning to add"]} />
    <Btn onClick={go} loading={load}>{load ? "🪪 Checking..." : "🪪 Check Licences Needed"}</Btn>
  </Col><Col>
    {load && <Dots />}
    {res && !load && <div>
      {res.total_cost_estimate && <Card border={`${ACC}55`}><SH text="Total Licensing Cost" /><div style={{ color: ACC, fontWeight: 800, fontSize: 20 }}>R{res.total_cost_estimate}</div></Card>}
      <Card><SH text="Licences You Need" />{res.licences_needed?.map((l, i) => <div key={i} style={{ marginBottom: 12, paddingBottom: 12, borderBottom: `1px solid ${BORDER}` }}><div style={{ color: TEXT, fontWeight: 600 }}>{l.licence}</div><div style={{ color: ACC, fontSize: 12 }}>Issued by: {l.issuing_body} · R{l.cost_estimate} · {l.timeframe}</div><div style={{ color: MUTED, fontSize: 12, marginTop: 4 }}>Docs: {l.documents_required?.join(", ")}</div></div>)}</Card>
      {res.operating_without_risk && <Card border="#ef444455"><SH text="Risk of Operating Without" /><div style={{ color: "#ef4444", fontSize: 13 }}>{res.operating_without_risk}</div></Card>}
    </div>}
    {err && !load && <Err msg={err} />}
    {!res && !err && !load && <Empty text="Licence requirements will appear here" />}
  </Col></Row>);
}

function LoanElig({ serverUrl, t }) {
  const [f, setF] = useState({ monthly_revenue: "", years_operating: "1-2 years", amount_needed: "", purpose: "Stock / inventory" });
  const [res, setRes] = useState(null); const [load, setLoad] = useState(false); const [err, setErr] = useState(null);
  const s = k => v => setF(p => ({ ...p, [k]: v }));
  async function go() { setLoad(true); setRes(null); setErr(null); try { const _r = parseJSON(await callClaude(PROMPTS.loan, `Revenue: R${f.monthly_revenue}/month, Years: ${f.years_operating}, Amount needed: R${f.amount_needed}, Purpose: ${f.purpose}`, serverUrl)); if (!_r) throw new Error(t.error_unreadable); setRes(_r); } catch (e) { setErr(e?.message); } setLoad(false); }
  return (<Row><Col>
    <Field label="Monthly Business Revenue (R)" value={f.monthly_revenue} onChange={s("monthly_revenue")} placeholder="e.g. 25000" />
    <Field label="How Long in Business?" value={f.years_operating} onChange={s("years_operating")} options={["Less than 1 year","1-2 years","2-5 years","5+ years"]} />
    <Field label="Amount Needed (R)" value={f.amount_needed} onChange={s("amount_needed")} placeholder="e.g. 50000" />
    <Field label="Purpose of Loan" value={f.purpose} onChange={s("purpose")} options={["Stock / inventory","Equipment / fridge / shelf","Expand / second shop","Pay suppliers","Working capital"]} />
    <Btn onClick={go} disabled={!f.monthly_revenue || !f.amount_needed} loading={load}>{load ? "🏦 Checking..." : "🏦 Check Loan Options"}</Btn>
  </Col><Col>
    {load && <Dots />}
    {res && !load && <div>
      <Card><div style={{ display: "flex", alignItems: "center", gap: 12 }}><div style={{ fontSize: 36, fontWeight: 800, color: ACC }}>{res.eligibility_score}</div><div style={{ color: MUTED, fontSize: 11, textTransform: "uppercase", letterSpacing: 1 }}>Eligibility Score / 100</div></div></Card>
      <Card><SH text="Best Options for You" />{res.recommended_options?.map((o, i) => <div key={i} style={{ marginBottom: 12, paddingBottom: 12, borderBottom: `1px solid ${BORDER}` }}><div style={{ color: TEXT, fontWeight: 700, marginBottom: 4 }}>{o.lender}</div><div style={{ color: ACC, fontSize: 13 }}>{o.product} · {o.amount_range}</div><div style={{ color: MUTED, fontSize: 12 }}>Rate: {o.interest_rate}</div><div style={{ color: ACC2, fontSize: 12, marginTop: 3 }}>✓ {o.pros}</div></div>)}</Card>
      {res.warning && <Card border="#ef444455"><div style={{ color: "#ef4444", fontSize: 13 }}>⚠️ {res.warning}</div></Card>}
    </div>}
    {err && !load && <Err msg={err} />}
    {!res && !err && !load && <Empty text="Loan options will appear here" />}
  </Col></Row>);
}

function GrantFinder({ serverUrl, t }) {
  const [f, setF] = useState({ owner_age: "25-35", gender: "Female", province: "Gauteng", years_operating: "1-2 years" });
  const [res, setRes] = useState(null); const [load, setLoad] = useState(false); const [err, setErr] = useState(null);
  const s = k => v => setF(p => ({ ...p, [k]: v }));
  async function go() { setLoad(true); setRes(null); setErr(null); try { const _r = parseJSON(await callClaude(PROMPTS.grant, `Age: ${f.owner_age}, Gender: ${f.gender}, Province: ${f.province}, Years: ${f.years_operating}`, serverUrl)); if (!_r) throw new Error(t.error_unreadable); setRes(_r); } catch (e) { setErr(e?.message); } setLoad(false); }
  const DC = { EASY: ACC2, MEDIUM: ACC, HARD: "#ef4444" };
  return (<Row><Col>
    <Field label="Your Age" value={f.owner_age} onChange={s("owner_age")} options={["Under 18","18-24 (Youth)","25-35","36-50","51+"]} />
    <Field label="Gender" value={f.gender} onChange={s("gender")} options={["Male","Female","Non-binary"]} />
    <Field label="Province" value={f.province} onChange={s("province")} options={["Gauteng","Western Cape","KwaZulu-Natal","Eastern Cape","Limpopo","Mpumalanga","North West","Free State","Northern Cape"]} />
    <Field label="Years in Business" value={f.years_operating} onChange={s("years_operating")} options={["Not yet started","Less than 1 year","1-2 years","2-5 years","5+ years"]} />
    <Btn onClick={go} loading={load}>{load ? "🎯 Finding Grants..." : "🎯 Find Available Grants"}</Btn>
  </Col><Col>
    {load && <Dots />}
    {res && !load && <div>
      {res.total_available && <Card border={`${ACC2}55`}><SH text="Total Grants Available" /><div style={{ color: ACC2, fontWeight: 800, fontSize: 20 }}>{res.total_available}</div></Card>}
      <Card><SH text="Grants You Can Apply For" />{res.available_grants?.map((g, i) => <div key={i} style={{ marginBottom: 14, paddingBottom: 14, borderBottom: `1px solid ${BORDER}` }}><div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}><span style={{ color: TEXT, fontWeight: 700, fontSize: 13 }}>{g.name}</span><Tag text={g.difficulty} color={DC[g.difficulty]} /></div><div style={{ color: ACC2, fontWeight: 600 }}>{g.amount}</div><div style={{ color: MUTED, fontSize: 12 }}>Apply at: {g.apply_at}</div>{g.deadline && <div style={{ color: ACC, fontSize: 12 }}>Deadline: {g.deadline}</div>}</div>)}</Card>
      {res.warning_about_scams && <Card border="#ef444455"><div style={{ color: "#ef4444", fontSize: 13 }}>⚠️ {res.warning_about_scams}</div></Card>}
    </div>}
    {err && !load && <Err msg={err} />}
    {!res && !err && !load && <Empty text="Grant opportunities will appear here" />}
  </Col></Row>);
}

function GrowthAdvisor({ serverUrl, t }) {
  const [f, setF] = useState({ monthly_profit: "", location: "Soweto", space_available: "Small room", has_fridge: "Yes - 1 fridge" });
  const [res, setRes] = useState(null); const [load, setLoad] = useState(false); const [err, setErr] = useState(null);
  const s = k => v => setF(p => ({ ...p, [k]: v }));
  async function go() { setLoad(true); setRes(null); setErr(null); try { const _r = parseJSON(await callClaude(PROMPTS.expand, `Profit: R${f.monthly_profit}/month, Location: ${f.location}, Space: ${f.space_available}, Fridge: ${f.has_fridge}`, serverUrl)); if (!_r) throw new Error(t.error_unreadable); setRes(_r); } catch (e) { setErr(e?.message); } setLoad(false); }
  const DC2 = { EASY: ACC2, MEDIUM: ACC, HARD: "#ef4444" };
  return (<Row><Col>
    <Field label="Monthly Profit (R)" value={f.monthly_profit} onChange={s("monthly_profit")} placeholder="e.g. 5000" />
    <Field label="Location" value={f.location} onChange={s("location")} options={["Soweto","Khayelitsha","Mamelodi","Mitchell's Plain","Tembisa","Umlazi","Other township"]} />
    <Field label="Space Available" value={f.space_available} onChange={s("space_available")} options={["Kiosk / window","Small room","Container","Full shop","Stand/yard space"]} />
    <Field label="Do You Have a Fridge?" value={f.has_fridge} onChange={s("has_fridge")} options={["Yes - 1 fridge","Yes - multiple fridges","No fridge yet"]} />
    <Btn onClick={go} disabled={!f.monthly_profit} loading={load}>{load ? "🚀 Planning..." : "🚀 Get Growth Plan"}</Btn>
  </Col><Col>
    {load && <Dots />}
    {res && !load && <div>
      <Card><div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}><div style={{ fontSize: 36, fontWeight: 800, color: ACC }}>{res.growth_score}</div><div><div style={{ color: MUTED, fontSize: 11, textTransform: "uppercase", letterSpacing: 1 }}>Growth Potential</div><div style={{ color: TEXT, fontSize: 13, marginTop: 2 }}>First step: {res.recommended_first_step}</div></div></div></Card>
      <Card><SH text="Quick Wins (Start This Month)" />{res.quick_wins?.map((w, i) => <div key={i} style={{ marginBottom: 12, paddingBottom: 12, borderBottom: `1px solid ${BORDER}` }}><div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}><span style={{ color: TEXT, fontWeight: 600, fontSize: 13 }}>{w.idea}</span><Tag text={w.difficulty} color={DC2[w.difficulty]} /></div><div style={{ color: ACC, fontSize: 12 }}>Cost: R{w.cost_to_start}</div><div style={{ color: ACC2, fontSize: 12 }}>Potential: R{w.monthly_revenue_potential}/month</div></div>)}</Card>
      {res.medium_term?.length > 0 && <Card><SH text="Medium-Term (3-12 months)" />{res.medium_term.map((m, i) => <div key={i} style={{ marginBottom: 8, color: MUTED, fontSize: 13 }}>🎯 {m.idea} — R{m.investment_needed} · {m.timeline}</div>)}</Card>}
    </div>}
    {err && !load && <Err msg={err} />}
    {!res && !err && !load && <Empty text="Growth plan will appear here" />}
  </Col></Row>);
}

// ─── 5 NEW TOOLS ─────────────────────────────────────────────────────────────
function DailyProfitTracker() {
  const today = new Date().toISOString().split("T")[0];
  const [entry, setEntry] = useState({ date: today, float: "", sales: "", stock_bought: "", other_costs: "" });
  const [entries, setEntries] = useState(() => { try { return JSON.parse(localStorage.getItem("spaza_profit") || "[]"); } catch { return []; } });
  const s = k => v => setEntry(p => ({ ...p, [k]: v }));
  function saveEntry() {
    const float = parseFloat(entry.float)||0, sales = parseFloat(entry.sales)||0, stock = parseFloat(entry.stock_bought)||0, other = parseFloat(entry.other_costs)||0;
    const profit = (sales - float) - stock - other;
    const updated = [{ ...entry, profit, saved_at: Date.now() }, ...entries.filter(e => e.date !== entry.date)].slice(0, 30);
    setEntries(updated); localStorage.setItem("spaza_profit", JSON.stringify(updated));
    setEntry({ date: today, float: "", sales: "", stock_bought: "", other_costs: "" });
  }
  const liveProfit = (parseFloat(entry.sales)||0) - (parseFloat(entry.float)||0) - (parseFloat(entry.stock_bought)||0) - (parseFloat(entry.other_costs)||0);
  const canSave = entry.float && entry.sales;
  const weekEntries = entries.slice(0, 7);
  const weekTotal = weekEntries.reduce((a, e) => a + (e.profit || 0), 0);
  const bestDay = weekEntries.reduce((best, e) => (!best || e.profit > best.profit) ? e : best, null);
  return (<Row><Col>
    <Field label="Date" value={entry.date} onChange={s("date")} placeholder="YYYY-MM-DD" />
    <Field label="Morning Float / Opening Cash (R)" value={entry.float} onChange={s("float")} placeholder="e.g. 500" />
    <Field label="Evening Cash / Total Sales (R)" value={entry.sales} onChange={s("sales")} placeholder="e.g. 1800" />
    <Field label="Stock Bought Today (R)" value={entry.stock_bought} onChange={s("stock_bought")} placeholder="e.g. 600" />
    <Field label="Other Costs Today (R)" value={entry.other_costs} onChange={s("other_costs")} placeholder="e.g. transport, airtime..." />
    {canSave && <div style={{ background: liveProfit >= 0 ? "#052e16" : "#1a0a0a", border: `1px solid ${liveProfit >= 0 ? ACC2 : "#ef4444"}55`, borderRadius: 10, padding: 14, marginTop: 8, textAlign: "center" }}><div style={{ color: MUTED, fontSize: 11, textTransform: "uppercase", letterSpacing: 1 }}>Today's Profit</div><div style={{ color: liveProfit >= 0 ? ACC2 : "#ef4444", fontWeight: 800, fontSize: 28 }}>R{liveProfit.toFixed(2)}</div></div>}
    <Btn onClick={saveEntry} disabled={!canSave}>{canSave ? "📊 Save Today's Entry" : "Fill in float & sales to continue"}</Btn>
  </Col><Col>
    {weekTotal !== 0 && <Card border={`${ACC2}55`}><SH text="This Week's Summary" /><div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}><div><div style={{ color: MUTED, fontSize: 11 }}>Week Total</div><div style={{ color: ACC2, fontWeight: 800, fontSize: 22 }}>R{weekTotal.toFixed(2)}</div></div>{bestDay && <div style={{ textAlign: "right" }}><div style={{ color: MUTED, fontSize: 11 }}>Best Day</div><div style={{ color: ACC, fontWeight: 700 }}>R{bestDay.profit.toFixed(2)}</div><div style={{ color: MUTED, fontSize: 11 }}>{bestDay.date}</div></div>}</div></Card>}
    {entries.length > 0 ? <Card><SH text="Recent Days" />{entries.slice(0, 10).map((e, i) => <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 0", borderBottom: `1px solid ${BORDER}` }}><div><div style={{ color: TEXT, fontSize: 13, fontWeight: 600 }}>{e.date}</div><div style={{ color: MUTED, fontSize: 11 }}>Sales: R{e.sales} · Stock: R{e.stock_bought || 0}</div></div><div style={{ color: e.profit >= 0 ? ACC2 : "#ef4444", fontWeight: 700, fontSize: 15 }}>{e.profit >= 0 ? "+" : ""}R{(e.profit||0).toFixed(2)}</div></div>)}</Card> : <Empty text="Save your first day's entry to start tracking" />}
  </Col></Row>);
}

function LoadSheddingPlanner({ serverUrl, t }) {
  const [f, setF] = useState({ stage: "Stage 2", duration: "2 hours", time_of_day: "Evening (peak hours)", has_generator: "No" });
  const [res, setRes] = useState(null); const [load, setLoad] = useState(false); const [err, setErr] = useState(null);
  const s = k => v => setF(p => ({ ...p, [k]: v }));
  async function go() { setLoad(true); setRes(null); setErr(null); try { const _r = parseJSON(await callClaude(PROMPTS.loadshed, `Stage: ${f.stage}, Duration: ${f.duration}, Time: ${f.time_of_day}, Generator: ${f.has_generator}`, serverUrl)); if (!_r) throw new Error(t.error_unreadable); setRes(_r); } catch (e) { setErr(e?.message); } setLoad(false); }
  const UC = { LOW: ACC2, MEDIUM: ACC, HIGH: "#ef4444", CRITICAL: "#ef4444" };
  return (<Row><Col>
    <Field label="Load Shedding Stage" value={f.stage} onChange={s("stage")} options={["Stage 1","Stage 2","Stage 3","Stage 4","Stage 5","Stage 6","Not sure"]} />
    <Field label="How Long Will It Last?" value={f.duration} onChange={s("duration")} options={["1 hour","2 hours","3-4 hours","All day","Multiple times today"]} />
    <Field label="When Is the Outage?" value={f.time_of_day} onChange={s("time_of_day")} options={["Morning (before 10am)","Midday","Evening (peak hours)","Night","Multiple slots"]} />
    <Field label="Do You Have a Generator?" value={f.has_generator} onChange={s("has_generator")} options={["No","Yes - small generator","Yes - large generator","Inverter/battery backup"]} />
    <Btn onClick={go} loading={load}>{load ? "⚡ Planning..." : "⚡ Get Load Shedding Plan"}</Btn>
  </Col><Col>
    {load && <Dots />}
    {res && !load && <div>
      {res.urgency && <Card border={`${UC[res.urgency]}55`}><div style={{ display: "flex", alignItems: "center", gap: 10 }}><Tag text={`${res.urgency} IMPACT`} color={UC[res.urgency]} /><div style={{ color: MUTED, fontSize: 12 }}>Extra revenue: <span style={{ color: ACC2, fontWeight: 700 }}>R{res.estimated_extra_daily_revenue}</span></div></div></Card>}
      <Card border={`${ACC2}55`}><SH text="Stock Up On These NOW" />{res.stock_now?.map((item, i) => <div key={i} style={{ marginBottom: 10, paddingBottom: 10, borderBottom: `1px solid ${BORDER}` }}><div style={{ display: "flex", justifyContent: "space-between" }}><span style={{ color: TEXT, fontWeight: 600 }}>{item.product}</span>{item.markup_opportunity && <Tag text="💰 MARKUP" color={ACC} />}</div><div style={{ color: MUTED, fontSize: 12 }}>{item.reason} · Qty: {item.qty_to_stock}</div></div>)}</Card>
      {res.avoid_stocking?.length > 0 && <Card border="#ef444455"><SH text="Don't Stock These" />{res.avoid_stocking.map((a, i) => <div key={i} style={{ color: "#ef4444", fontSize: 13, marginBottom: 4 }}>✗ {a.product} — <span style={{ color: MUTED }}>{a.reason}</span></div>)}</Card>}
      {res.cash_handling_tip && <Card><div style={{ color: ACC, fontSize: 13 }}>💵 {res.cash_handling_tip}</div></Card>}
      <Card><SH text="Operational Tips" />{res.operational_tips?.map((tip, i) => <div key={i} style={{ color: MUTED, fontSize: 13, marginBottom: 4 }}>• {tip}</div>)}</Card>
    </div>}
    {err && !load && <Err msg={err} />}
    {!res && !err && !load && <Empty text="Load shedding plan will appear here" />}
  </Col></Row>);
}

function StokvelManager() {
  const [members, setMembers] = useState(() => { try { return JSON.parse(localStorage.getItem("spaza_stokvel_members") || "[]"); } catch { return []; } });
  const [payments, setPayments] = useState(() => { try { return JSON.parse(localStorage.getItem("spaza_stokvel_payments") || "[]"); } catch { return []; } });
  const [newMember, setNewMember] = useState("");
  const [monthlyAmt, setMonthlyAmt] = useState(() => localStorage.getItem("spaza_stokvel_amt") || "500");
  const [payForm, setPayForm] = useState({ member: "", month: new Date().toISOString().slice(0, 7), amount: "" });
  function saveMember() { if (!newMember.trim()) return; const updated = [...members, { name: newMember.trim(), id: Date.now(), joined: Date.now() }]; setMembers(updated); localStorage.setItem("spaza_stokvel_members", JSON.stringify(updated)); setNewMember(""); }
  function savePayment() { if (!payForm.member || !payForm.amount) return; const updated = [...payments, { ...payForm, saved_at: Date.now() }]; setPayments(updated); localStorage.setItem("spaza_stokvel_payments", JSON.stringify(updated)); setPayForm({ member: "", month: new Date().toISOString().slice(0, 7), amount: "" }); }
  function saveAmt(v) { setMonthlyAmt(v); localStorage.setItem("spaza_stokvel_amt", v); }
  function removeMember(id) { const updated = members.filter(m => m.id !== id); setMembers(updated); localStorage.setItem("spaza_stokvel_members", JSON.stringify(updated)); }
  const currentMonth = new Date().toISOString().slice(0, 7);
  const totalPool = members.length * parseFloat(monthlyAmt || 0);
  const thisMonthPaid = payments.filter(p => p.month === currentMonth);
  const paidNames = thisMonthPaid.map(p => p.member);
  const unpaidMembers = members.filter(m => !paidNames.includes(m.name));
  const allTimeTotal = payments.reduce((a, p) => a + parseFloat(p.amount || 0), 0);
  return (<Row><Col>
    <div style={{ marginBottom: 16 }}><div style={{ fontSize: 10, color: MUTED, marginBottom: 4, textTransform: "uppercase", letterSpacing: 1.5 }}>Monthly Contribution (R)</div><input value={monthlyAmt} onChange={e => saveAmt(e.target.value)} placeholder="e.g. 500" style={{ width: "100%", background: "#070f1d", border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 12px", color: TEXT, fontSize: 14 }} /></div>
    <div style={{ marginBottom: 16 }}><div style={{ fontSize: 10, color: MUTED, marginBottom: 4, textTransform: "uppercase", letterSpacing: 1.5 }}>Add Member</div><div style={{ display: "flex", gap: 8 }}><input value={newMember} onChange={e => setNewMember(e.target.value)} onKeyDown={e => e.key === "Enter" && saveMember()} placeholder="Member name..." style={{ flex: 1, background: "#070f1d", border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 12px", color: TEXT, fontSize: 14 }} /><button onClick={saveMember} style={{ background: ACC, border: "none", borderRadius: 8, padding: "10px 16px", color: "#000", fontWeight: 700, cursor: "pointer" }}>Add</button></div></div>
    {members.length > 0 && <Card><SH text="Members" />{members.map((m, i) => <div key={m.id || i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "6px 0", borderBottom: `1px solid ${BORDER}` }}><span style={{ color: TEXT, fontSize: 13 }}>{m.name}</span><button onClick={() => removeMember(m.id)} style={{ background: "transparent", border: "none", color: MUTED, cursor: "pointer", fontSize: 12 }}>remove</button></div>)}</Card>}
    {members.length > 0 && <div><div style={{ fontSize: 10, color: MUTED, marginBottom: 8, textTransform: "uppercase", letterSpacing: 1.5, marginTop: 12 }}>Record a Payment</div><Field label="Member" value={payForm.member} onChange={v => setPayForm(p => ({ ...p, member: v }))} options={["", ...members.map(m => m.name)]} /><Field label="Month" value={payForm.month} onChange={v => setPayForm(p => ({ ...p, month: v }))} placeholder="YYYY-MM" /><Field label="Amount Paid (R)" value={payForm.amount} onChange={v => setPayForm(p => ({ ...p, amount: v }))} placeholder={monthlyAmt} /><Btn onClick={savePayment} disabled={!payForm.member || !payForm.amount}>✓ Record Payment</Btn></div>}
  </Col><Col>
    {members.length === 0 ? <Empty text="Add members to start managing your stokvel" /> : <div>
      <Card border={`${ACC2}55`}><SH text="This Month's Pool" /><div style={{ color: ACC2, fontWeight: 800, fontSize: 26 }}>R{totalPool.toLocaleString()}</div><div style={{ color: MUTED, fontSize: 12, marginTop: 4 }}>{members.length} members × R{monthlyAmt}/month</div><div style={{ marginTop: 10 }}><div style={{ color: TEXT, fontSize: 13 }}>Paid: <span style={{ color: ACC2, fontWeight: 700 }}>{thisMonthPaid.length}/{members.length}</span></div><div style={{ color: TEXT, fontSize: 13 }}>Collected: <span style={{ color: ACC, fontWeight: 700 }}>R{thisMonthPaid.reduce((a, p) => a + parseFloat(p.amount || 0), 0).toLocaleString()}</span></div></div></Card>
      {unpaidMembers.length > 0 && <Card border="#ef444455"><SH text="Still to Pay" />{unpaidMembers.map((m, i) => <div key={i} style={{ color: "#ef4444", fontSize: 13, marginBottom: 4 }}>⏳ {m.name} — R{monthlyAmt} outstanding</div>)}</Card>}
      {paidNames.length > 0 && <Card border={`${ACC2}55`}><SH text="Paid This Month ✓" />{paidNames.map((n, i) => <div key={i} style={{ color: ACC2, fontSize: 13, marginBottom: 4 }}>✓ {n}</div>)}</Card>}
      <Card><SH text="All Time Collections" /><div style={{ color: ACC, fontWeight: 800, fontSize: 20 }}>R{allTimeTotal.toLocaleString()}</div><div style={{ color: MUTED, fontSize: 12 }}>{payments.length} payments recorded</div></Card>
    </div>}
  </Col></Row>);
}

function CompetitorChecker({ serverUrl, t }) {
  const [f, setF] = useState({ competitor: "Shoprite", specials: "", is_payday: "No", location: "Soweto" });
  const [res, setRes] = useState(null); const [load, setLoad] = useState(false); const [err, setErr] = useState(null);
  const s = k => v => setF(p => ({ ...p, [k]: v }));
  async function go() { setLoad(true); setRes(null); setErr(null); try { const _r = parseJSON(await callClaude(PROMPTS.competitor, `Competitor: ${f.competitor}, Specials: ${f.specials}, Payday: ${f.is_payday}, Location: ${f.location}`, serverUrl)); if (!_r) throw new Error(t.error_unreadable); setRes(_r); } catch (e) { setErr(e?.message); } setLoad(false); }
  const AC = { UNDERCUT: "#ef4444", MATCH: ACC, IGNORE: MUTED, PREMIUM: ACC2 };
  return (<Row><Col>
    <Field label="Nearby Competitor" value={f.competitor} onChange={s("competitor")} options={["Shoprite","Boxer","Pick n Pay","Checkers","USave","SPAR","Other spaza"]} />
    <Field label="Their Current Specials / Prices" value={f.specials} onChange={s("specials")} placeholder="e.g. Coke 2L R22, Bread R14.99, Simba R5.50..." rows={4} />
    <Field label="Is It Payday Weekend?" value={f.is_payday} onChange={s("is_payday")} options={["No","Yes - month end","Yes - 15th","Yes - grant day (SASSA)"]} />
    <Field label="Your Location" value={f.location} onChange={s("location")} options={["Soweto","Khayelitsha","Mamelodi","Mitchell's Plain","Tembisa","Umlazi","Other township"]} />
    <Btn onClick={go} disabled={!f.specials} loading={load}>{load ? "🏪 Analysing..." : "🏪 Check My Pricing Strategy"}</Btn>
  </Col><Col>
    {load && <Dots />}
    {res && !load && <div>
      {res.overall_strategy && <Card border={`${ACC}55`}><SH text="Your Strategy This Week" /><div style={{ color: ACC, fontWeight: 600 }}>{res.overall_strategy}</div></Card>}
      <Card><SH text="Product by Product" />{res.pricing_responses?.map((item, i) => <div key={i} style={{ marginBottom: 12, paddingBottom: 12, borderBottom: `1px solid ${BORDER}` }}><div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}><span style={{ color: TEXT, fontWeight: 600 }}>{item.product}</span><Tag text={item.action} color={AC[item.action] || ACC} /></div><div style={{ color: MUTED, fontSize: 12 }}>Their price: R{item.competitor_price} → Yours: <span style={{ color: ACC2, fontWeight: 700 }}>R{item.recommended_spaza_price}</span></div><div style={{ color: MUTED, fontSize: 11, marginTop: 2 }}>{item.reason}</div></div>)}</Card>
      {res.payday_tips?.length > 0 && <Card border={`${ACC}55`}><SH text="Payday Tips" />{res.payday_tips.map((tip, i) => <div key={i} style={{ color: TEXT, fontSize: 13, marginBottom: 4 }}>💰 {tip}</div>)}</Card>}
      {res.products_to_promote_this_week?.length > 0 && <Card><SH text="Push These This Week" />{res.products_to_promote_this_week.map((p, i) => <div key={i} style={{ color: ACC2, fontSize: 13, marginBottom: 4 }}>⭐ {p}</div>)}</Card>}
    </div>}
    {err && !load && <Err msg={err} />}
    {!res && !err && !load && <Empty text="Pricing strategy will appear here" />}
  </Col></Row>);
}

function WhatsAppOrders({ serverUrl, t }) {
  const [tab, setTab] = useState("order");
  const [contacts, setContacts] = useState(() => { try { return JSON.parse(localStorage.getItem("spaza_wa_contacts") || "[]"); } catch { return []; } });
  const [orders, setOrders] = useState(() => { try { return JSON.parse(localStorage.getItem("spaza_wa_orders") || "[]"); } catch { return []; } });
  const [newContact, setNewContact] = useState({ name: "", phone: "", type: "Wholesaler" });
  const [f, setF] = useState({ supplierContact: "", supplierName: "Makro", products: "", delivery: "I will collect", account: "Cash customer" });
  const [res, setRes] = useState(null); const [load, setLoad] = useState(false); const [err, setErr] = useState(null);
  const [copied, setCopied] = useState(null);
  const s = k => v => setF(p => ({ ...p, [k]: v }));

  function saveContact() { if (!newContact.name || !newContact.phone) return; const phone = newContact.phone.replace(/\D/g,"").replace(/^0/,"27"); const updated = [...contacts, { ...newContact, phone, id: Date.now() }]; setContacts(updated); localStorage.setItem("spaza_wa_contacts", JSON.stringify(updated)); setNewContact({ name: "", phone: "", type: "Wholesaler" }); }
  function removeContact(id) { const updated = contacts.filter(c => c.id !== id); setContacts(updated); localStorage.setItem("spaza_wa_contacts", JSON.stringify(updated)); }
  function saveOrder(supplier, products, message) { const updated = [{ id: Date.now(), supplier, products, message, status: "SENT", date: new Date().toLocaleDateString("en-ZA"), notes: "" }, ...orders].slice(0, 50); setOrders(updated); localStorage.setItem("spaza_wa_orders", JSON.stringify(updated)); }
  function updateStatus(id, status) { const updated = orders.map(o => o.id === id ? { ...o, status } : o); setOrders(updated); localStorage.setItem("spaza_wa_orders", JSON.stringify(updated)); }
  function updateNotes(id, notes) { const updated = orders.map(o => o.id === id ? { ...o, notes } : o); setOrders(updated); localStorage.setItem("spaza_wa_orders", JSON.stringify(updated)); }

  async function go() {
    setLoad(true); setRes(null); setErr(null);
    const contact = contacts.find(c => c.id === parseInt(f.supplierContact));
    try { const _r = parseJSON(await callClaude(PROMPTS.whatsapp, `Supplier: ${contact?.name || f.supplierName}, Products: ${f.products}, Delivery: ${f.delivery}, Account: ${f.account}`, serverUrl)); if (!_r) throw new Error(t.error_unreadable); setRes(_r); } catch (e) { setErr(e?.message); }
    setLoad(false);
  }
  function copyText(text, key) { navigator.clipboard.writeText(text).then(() => { setCopied(key); setTimeout(() => setCopied(null), 2000); }); }
  function openWhatsApp(text, phone) { const base = phone ? `https://wa.me/${phone}` : "https://wa.me/"; window.open(`${base}?text=${encodeURIComponent(text)}`, "_blank"); if (text === res?.whatsapp_message) saveOrder(contacts.find(c => c.id === parseInt(f.supplierContact))?.name || f.supplierName, f.products, text); }

  const selectedContact = contacts.find(c => c.id === parseInt(f.supplierContact));
  const STATUS_COLOR = { SENT: ACC, RECEIVED: ACC2, PROBLEM: "#ef4444", CANCELLED: MUTED };
  const STATUS_LABEL = { SENT: "📤 Sent", RECEIVED: "✅ Received", PROBLEM: "⚠️ Problem", CANCELLED: "❌ Cancelled" };
  const TabBtn = ({ id, label }) => <button onClick={() => setTab(id)} style={{ flex: 1, background: tab === id ? ACC : "transparent", border: `1px solid ${tab === id ? ACC : BORDER}`, borderRadius: 8, padding: "8px 0", color: tab === id ? "#000" : MUTED, fontWeight: tab === id ? 700 : 500, fontSize: 12, cursor: "pointer" }}>{label}</button>;

  return <div>
    <div style={{ display: "flex", gap: 8, marginBottom: 20 }}><TabBtn id="order" label="📱 Generate Order" /><TabBtn id="contacts" label={`📒 Contacts (${contacts.length})`} /><TabBtn id="tracker" label={`📦 Tracker (${orders.length})`} /></div>
    {tab === "order" && <Row><Col>
      {contacts.length > 0 && <div style={{ marginBottom: 10 }}><div style={{ fontSize: 10, color: MUTED, marginBottom: 4, textTransform: "uppercase", letterSpacing: 1.5 }}>Send To (Saved Contact)</div><select value={f.supplierContact} onChange={e => s("supplierContact")(e.target.value)} style={{ width: "100%", background: "#070f1d", border: `1px solid ${f.supplierContact ? ACC : BORDER}`, borderRadius: 8, padding: "10px 12px", color: TEXT, fontSize: 14 }}><option value="">— No saved contact —</option>{contacts.map(c => <option key={c.id} value={c.id}>{c.name} — {c.phone}</option>)}</select>{selectedContact && <div style={{ marginTop: 6, padding: "6px 10px", background: "#052e16", borderRadius: 6, fontSize: 12, color: ACC2 }}>✓ Opens directly in {selectedContact.name}'s chat</div>}</div>}
      {!f.supplierContact && <Field label="Supplier Name" value={f.supplierName} onChange={s("supplierName")} options={["Makro","Jumbo Cash & Carry","Metro Cash & Carry","Local rep","Shoprite Wholesale","Other"]} />}
      <Field label="Products to Order" value={f.products} onChange={s("products")} placeholder="e.g. 2 cases Coke 2L, 50x bread, 10 boxes Simba..." rows={5} />
      <Field label="Delivery or Collection?" value={f.delivery} onChange={s("delivery")} options={["I will collect","Please deliver","Delivery if free","Depends on price"]} />
      <Field label="Account Type" value={f.account} onChange={s("account")} options={["Cash customer","Credit account","New customer","Loyal customer (2+ years)"]} />
      <Btn onClick={go} disabled={!f.products} loading={load}>{load ? "📱 Writing..." : "📱 Generate WhatsApp Message"}</Btn>
    </Col><Col>
      {load && <Dots />}
      {res && !load && <div>
        {res.whatsapp_message && <Card border={`${ACC2}55`}><SH text="Main Order Message" /><div style={{ background: "#052e16", borderRadius: 8, padding: 14, color: TEXT, fontSize: 13, lineHeight: 1.7, whiteSpace: "pre-wrap", marginBottom: 10 }}>{res.whatsapp_message}</div><div style={{ display: "flex", gap: 8 }}><button onClick={() => copyText(res.whatsapp_message, "main")} style={{ flex: 1, background: copied === "main" ? ACC2 : ACC, border: "none", borderRadius: 8, padding: "9px 0", color: "#000", fontWeight: 700, fontSize: 13, cursor: "pointer" }}>{copied === "main" ? "✓ Copied!" : "📋 Copy"}</button><button onClick={() => openWhatsApp(res.whatsapp_message, selectedContact?.phone)} style={{ flex: 1, background: "#25d366", border: "none", borderRadius: 8, padding: "9px 0", color: "#000", fontWeight: 700, fontSize: 13, cursor: "pointer" }}>{selectedContact ? `📱 Open ${selectedContact.name}'s Chat` : "📱 Open WhatsApp"}</button></div></Card>}
        {res.negotiation_line && <Card border={`${ACC}55`}><SH text="Ask for Discount" /><div style={{ background: "#1a1000", borderRadius: 8, padding: 12, color: TEXT, fontSize: 13, lineHeight: 1.6, whiteSpace: "pre-wrap", marginBottom: 8 }}>{res.negotiation_line}</div><button onClick={() => copyText(res.negotiation_line, "neg")} style={{ width: "100%", background: copied === "neg" ? ACC2 : DIM, border: "none", borderRadius: 8, padding: "8px 0", color: copied === "neg" ? "#000" : TEXT, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>{copied === "neg" ? "✓ Copied!" : "📋 Copy Discount Line"}</button></Card>}
        {res.follow_up_message && <Card><SH text="No Reply After 2 Hours?" /><div style={{ background: "#0d1e35", borderRadius: 8, padding: 12, color: MUTED, fontSize: 13, lineHeight: 1.6, whiteSpace: "pre-wrap", marginBottom: 8 }}>{res.follow_up_message}</div><button onClick={() => copyText(res.follow_up_message, "follow")} style={{ width: "100%", background: copied === "follow" ? ACC2 : DIM, border: "none", borderRadius: 8, padding: "8px 0", color: copied === "follow" ? "#000" : TEXT, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>{copied === "follow" ? "✓ Copied!" : "📋 Copy Follow-Up"}</button></Card>}
      </div>}
      {err && !load && <Err msg={err} />}
      {!res && !err && !load && <Empty text="Your WhatsApp order message will appear here" />}
    </Col></Row>}
    {tab === "contacts" && <Row><Col>
      <Card border={`${ACC}55`}><SH text="Add Supplier Contact" />
        <div style={{ marginBottom: 8 }}><div style={{ fontSize: 10, color: MUTED, marginBottom: 4, textTransform: "uppercase", letterSpacing: 1.5 }}>Name</div><input value={newContact.name} onChange={e => setNewContact(p => ({ ...p, name: e.target.value }))} placeholder="e.g. Sipho at Makro" style={{ width: "100%", background: "#070f1d", border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 12px", color: TEXT, fontSize: 14 }} /></div>
        <div style={{ marginBottom: 8 }}><div style={{ fontSize: 10, color: MUTED, marginBottom: 4, textTransform: "uppercase", letterSpacing: 1.5 }}>WhatsApp Number</div><input value={newContact.phone} onChange={e => setNewContact(p => ({ ...p, phone: e.target.value }))} placeholder="e.g. 0821234567" style={{ width: "100%", background: "#070f1d", border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 12px", color: TEXT, fontSize: 14 }} /></div>
        <Field label="Type" value={newContact.type} onChange={v => setNewContact(p => ({ ...p, type: v }))} options={["Wholesaler","Local rep","Bread supplier","Cold drink supplier","Airtime supplier","Other"]} />
        <Btn onClick={saveContact} disabled={!newContact.name || !newContact.phone}>📒 Save Contact</Btn>
      </Card>
    </Col><Col>
      {contacts.length === 0 ? <Empty text="No contacts saved yet" /> : <Card><SH text={`${contacts.length} Saved Suppliers`} />{contacts.map((c, i) => <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderBottom: `1px solid ${BORDER}` }}><div><div style={{ color: TEXT, fontWeight: 600, fontSize: 13 }}>{c.name}</div><div style={{ color: MUTED, fontSize: 12 }}>{c.type} · +{c.phone}</div></div><div style={{ display: "flex", gap: 6 }}><button onClick={() => window.open(`https://wa.me/${c.phone}`, "_blank")} style={{ background: "#25d366", border: "none", borderRadius: 6, padding: "5px 10px", color: "#000", fontWeight: 700, fontSize: 11, cursor: "pointer" }}>Chat</button><button onClick={() => removeContact(c.id)} style={{ background: "transparent", border: `1px solid ${BORDER}`, borderRadius: 6, padding: "5px 10px", color: MUTED, fontSize: 11, cursor: "pointer" }}>Remove</button></div></div>)}</Card>}
    </Col></Row>}
    {tab === "tracker" && <div>
      {orders.length === 0 ? <Empty text="No orders tracked yet. Send an order to start tracking." /> : <div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 10, marginBottom: 16 }}>{["SENT","RECEIVED","PROBLEM","CANCELLED"].map(st => <div key={st} style={{ background: CARD, border: `1px solid ${STATUS_COLOR[st]}33`, borderRadius: 10, padding: 12, textAlign: "center" }}><div style={{ color: STATUS_COLOR[st], fontWeight: 800, fontSize: 20 }}>{orders.filter(o => o.status === st).length}</div><div style={{ color: MUTED, fontSize: 10, textTransform: "uppercase", letterSpacing: 1 }}>{st}</div></div>)}</div>
        {orders.map((o) => <div key={o.id} style={{ background: CARD, border: `1px solid ${STATUS_COLOR[o.status]}44`, borderRadius: 12, padding: 14, marginBottom: 10 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}><div><div style={{ color: TEXT, fontWeight: 700, fontSize: 14 }}>{o.supplier}</div><div style={{ color: MUTED, fontSize: 12 }}>{o.date} · {o.products?.slice(0,60)}{o.products?.length > 60 ? "..." : ""}</div></div><Tag text={STATUS_LABEL[o.status]} color={STATUS_COLOR[o.status]} /></div>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 8 }}>{["SENT","RECEIVED","PROBLEM","CANCELLED"].map(st => <button key={st} onClick={() => updateStatus(o.id, st)} style={{ background: o.status === st ? STATUS_COLOR[st] : "transparent", border: `1px solid ${STATUS_COLOR[st]}55`, borderRadius: 6, padding: "3px 10px", color: o.status === st ? "#000" : STATUS_COLOR[st], fontSize: 11, fontWeight: 700, cursor: "pointer" }}>{st}</button>)}</div>
          <input value={o.notes} onChange={e => updateNotes(o.id, e.target.value)} placeholder="Add notes e.g. 'delivered Friday, missing bread'" style={{ width: "100%", background: "#070f1d", border: `1px solid ${BORDER}`, borderRadius: 6, padding: "7px 10px", color: TEXT, fontSize: 12 }} />
        </div>)}
      </div>}
    </div>}
  </div>;
}

// ─── MAIN APP ─────────────────────────────────────────────────────────────────
export default function SpazaIQ() {
  const [active, setActive] = useState("stockorder");
  const [lang, setLang] = useState("en");
  const [serverUrl, setServerUrl] = useState("https://spazaiq-server-production.up.railway.app");
  const [draftUrl, setDraftUrl] = useState("https://spazaiq-server-production.up.railway.app");
  const [showSettings, setShowSettings] = useState(false);
  const t = LANG[lang];
  const activeT = TOOLS.find(tool => tool.id === active);
  const groups = [...new Set(TOOLS.map(tool => tool.group))];
  const total = TOOLS.length;

  function renderTool(id) {
    const props = { serverUrl, t };
    switch(id) {
      case "stockorder": return <StockAdvisor {...props} />;
      case "pricing":    return <PricingCalc {...props} />;
      case "cashflow":   return <CashFlow {...props} />;
      case "supplier":   return <SupplierNeg {...props} />;
      case "profit":     return <DailyProfitTracker />;
      case "loadshed":   return <LoadSheddingPlanner {...props} />;
      case "stokvel":    return <StokvelManager />;
      case "competitor": return <CompetitorChecker {...props} />;
      case "whatsapp":   return <WhatsAppOrders {...props} />;
      case "sars":       return <SarsTax {...props} />;
      case "uif":        return <UifReg {...props} />;
      case "cipc":       return <CipcGuide {...props} />;
      case "license":    return <BizLicence {...props} />;
      case "loan":       return <LoanElig {...props} />;
      case "grant":      return <GrantFinder {...props} />;
      case "expand":     return <GrowthAdvisor {...props} />;
      default:           return null;
    }
  }

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "'Inter',system-ui,sans-serif" }}>
      <style>{`
        *{box-sizing:border-box;-webkit-tap-highlight-color:transparent;}
        ::-webkit-scrollbar{width:4px;}
        ::-webkit-scrollbar-track{background:${BG};}
        ::-webkit-scrollbar-thumb{background:#1e3050;border-radius:3px;}
        select,input,textarea{outline:none;color-scheme:dark;}
        select:focus,input:focus,textarea:focus{border-color:${ACC}!important;}
        button:active{opacity:.8;}
        @media(hover:hover){button:hover:not(:disabled){opacity:.88;transform:translateY(-1px);}}
        @keyframes blink{0%,80%,100%{transform:scale(.6);opacity:.3}40%{transform:scale(1);opacity:1}}
      `}</style>

      <div style={{ background: "#03200e", borderBottom: `1px solid ${ACC2}55`, padding: "6px 16px", display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
        <div style={{ width: 6, height: 6, background: ACC2, borderRadius: "50%", boxShadow: `0 0 6px ${ACC2}`, flexShrink: 0 }} />
        <span style={{ fontSize: 11, color: ACC2, fontWeight: 600 }}>{t.tools_ready}</span>
        <div style={{ marginLeft: "auto", display: "flex", gap: 4, alignItems: "center", flexWrap: "wrap" }}>
          <select value={lang} onChange={e => setLang(e.target.value)} style={{ background: "#070f1d", border: `1px solid ${ACC}`, borderRadius: 6, padding: "3px 8px", color: ACC, fontSize: 11, cursor: "pointer", fontWeight: 600 }}>
            {Object.entries(LANG).map(([code, l]) => <option key={code} value={code}>{l.flag} {l.name}</option>)}
          </select>
          <button onClick={() => { setDraftUrl(serverUrl); setShowSettings(v => !v); }} style={{ background: showSettings ? ACC+"22" : "transparent", border: `1px solid ${BORDER}`, borderRadius: 6, padding: "2px 8px", color: MUTED, fontSize: 11, cursor: "pointer" }}>⚙️</button>
        </div>
      </div>

      {showSettings && <div style={{ background: "#060e1a", borderBottom: `1px solid ${BORDER}`, padding: "12px 16px" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <div style={{ fontSize: 10, color: MUTED, marginBottom: 4, textTransform: "uppercase", letterSpacing: 1.5 }}>{t.server_url_label}</div>
          <div style={{ display: "flex", gap: 8 }}>
            <input value={draftUrl} onChange={e => setDraftUrl(e.target.value)} style={{ flex: 1, background: "#070f1d", border: `1px solid ${BORDER}`, borderRadius: 8, padding: "8px 12px", color: TEXT, fontSize: 13 }} />
            <button onClick={() => { setServerUrl(draftUrl); setShowSettings(false); }} style={{ background: ACC, border: "none", borderRadius: 8, padding: "8px 16px", color: "#000", fontWeight: 700, fontSize: 13, cursor: "pointer" }}>Save</button>
          </div>
          <div style={{ fontSize: 10, color: MUTED, marginTop: 6 }}>Local: http://localhost:4000 · Production: your Railway/Render URL</div>
        </div>
      </div>}

      <div style={{ background: "linear-gradient(180deg,#060e1a,#050c15)", borderBottom: `1px solid ${BORDER}`, padding: "0 16px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 0 8px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 36, height: 36, background: `linear-gradient(135deg,${ACC},#d97706)`, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 }}>🛒</div>
              <div>
                <div style={{ fontWeight: 800, fontSize: 18, color: TEXT, letterSpacing: "-0.5px" }}>SpazaIQ</div>
                <div style={{ fontSize: 9, color: DIM, letterSpacing: 1.5, textTransform: "uppercase" }}>{t.tagline}</div>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <div style={{ width: 7, height: 7, background: ACC2, borderRadius: "50%", boxShadow: `0 0 8px ${ACC2}` }} />
              <span style={{ fontSize: 11, color: ACC2, fontWeight: 600 }}>{t.live}</span>
            </div>
          </div>
          <div style={{ overflowX: "auto", paddingBottom: 2 }}>
            {groups.map(group => (
              <div key={group}>
                <div style={{ fontSize: 9, color: DIM, textTransform: "uppercase", letterSpacing: 2, marginBottom: 4, paddingTop: 6, whiteSpace: "nowrap" }}>{group}</div>
                <div style={{ display: "flex", gap: 2 }}>
                  {TOOLS.filter(tool => tool.group === group).map(tool => {
                    const isActive = active === tool.id;
                    return <button key={tool.id} onClick={() => setActive(tool.id)} style={{ background: isActive ? ACC : "transparent", border: "none", borderRadius: "8px 8px 0 0", padding: "6px 10px", color: isActive ? "#000" : DIM, fontWeight: isActive ? 700 : 500, fontSize: 11, cursor: "pointer", display: "flex", alignItems: "center", gap: 4, whiteSpace: "nowrap", borderBottom: isActive ? `2px solid ${ACC}` : "2px solid transparent" }}><span>{tool.icon}</span><span>{tool.label}</span></button>;
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "20px 16px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
          <span style={{ fontSize: 22 }}>{activeT?.icon}</span>
          <div>
            <h2 style={{ margin: 0, fontSize: 17, fontWeight: 800, color: TEXT }}>{activeT?.label}</h2>
            <div style={{ fontSize: 10, color: ACC, textTransform: "uppercase", letterSpacing: 1.5, marginTop: 2 }}>SpazaIQ AI Tool</div>
          </div>
        </div>
        {renderTool(active)}
      </div>

      <div style={{ textAlign: "center", padding: "14px 16px", borderTop: `1px solid ${BORDER}`, color: DIM, fontSize: 10 }}>
        SpazaIQ · {total} AI Tools · Built for South African Township Business Owners · Powered by Claude AI
      </div>
    </div>
  );
}
