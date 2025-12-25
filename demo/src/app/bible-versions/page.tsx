import { Section } from '@/components/elements/section'
import { Container } from '@/components/elements/container'
import { Heading } from '@/components/elements/heading'
import { CheckmarkIcon } from '@/components/icons/checkmark-icon'

const bibleVersions = [
  { "id": "tamil", "version": "Tamil", "state": "Active" },
  { "id": "esv", "version": "ESV", "state": "Active" },
  { "id": "malayalam", "version": "Malayalam", "state": "Active" },
  { "id": "kjv", "version": "KJV", "state": "Active" },
  { "id": "amplified", "version": "Amplified", "state": "Active" },
  { "id": "chinese_union_simplified_strongs", "version": "Chinese Union Version (Simplified, Strong's)", "state": "Active" },
  { "id": "xhosa", "version": "Xhosa", "state": "Active" },
  { "id": "bungo_yaku_taisho_meiji", "version": "Bungo-yaku: Taisho-kaiyaku (NT), Meiji-yaku (OT)", "state": "Active" },
  { "id": "oster", "version": "Oster", "state": "Active" },
  { "id": "rvg", "version": "Reina-Valera Gómez", "state": "Active" },
  { "id": "rvg_2004", "version": "Reina-Valera Gómez 2004", "state": "Active" },
  { "id": "polbg", "version": "Polish BG", "state": "Active" },
  { "id": "asv_1901", "version": "ASV", "state": "Active" },
  { "id": "chinese_union_simplified", "version": "Chinese Union Version (Simplified)", "state": "Active" },
  { "id": "bible_kralicka", "version": "Bible Kralická", "state": "Active" },
  { "id": "chinese_union_traditional", "version": "Chinese Union Version (Traditional)", "state": "Active" },
  { "id": "diodati_1649", "version": "Diodati (1649)", "state": "Active" },
  { "id": "bengali", "version": "Bengali", "state": "Active" },
  { "id": "martin_1744", "version": "Martin (1744)", "state": "Active" },
  { "id": "thai_kjv", "version": "Thai KJV", "state": "Active" },
  { "id": "synodal_1876", "version": "Russian Synodal (1876)", "state": "Active" },
  { "id": "pol_nbg", "version": "Polish NBG", "state": "Active" },
  { "id": "staten_vertaling", "version": "Staten Vertaling", "state": "Active" },
  { "id": "maori", "version": "Maori", "state": "Active" },
  { "id": "karoli", "version": "Karoli", "state": "Active" },
  { "id": "korean", "version": "Korean", "state": "Active" },
  { "id": "gujarati", "version": "Gujarati", "state": "Active" },
  { "id": "kougo_yaku", "version": "Kougo-yaku", "state": "Active" },
  { "id": "trparsed", "version": "trparsed", "state": "Active" },
  { "id": "luther_1912", "version": "Luther (1912)", "state": "Active" },
  { "id": "telugu", "version": "Telugu", "state": "Active" },
  { "id": "tyndale", "version": "Tyndale", "state": "Active" },
  { "id": "textus_receptus_nt", "version": "Textus Receptus NT", "state": "Active" },
  { "id": "nepali", "version": "Nepali", "state": "Active" },
  { "id": "rv_1909_strongs", "version": "Reina-Valera 1909 (Strong's)", "state": "Active" },
  { "id": "oriya", "version": "Oriya", "state": "Active" },
  { "id": "old_persian_1895", "version": "Old Persian (1895)", "state": "Active" },
  { "id": "finnish_1776", "version": "Finnish 1776", "state": "Active" },
  { "id": "rv_1909", "version": "Reina-Valera 1909", "state": "Active" },
  { "id": "albanian_shqip", "version": "Albanian Shqip", "state": "Active" },
  { "id": "fidela_romana", "version": "Fidela Biblia în limba română", "state": "Active" },
  { "id": "vietnamese_cadman_1934", "version": "Vietnamese Cadman (1934)", "state": "Active" },
  { "id": "swahili_nt", "version": "Swahili NT", "state": "Active" },
  { "id": "elberfelder_1871", "version": "Elberfelder (1871)", "state": "Active" },
  { "id": "kjv_strongs", "version": "KJV with Strong's", "state": "Active" },
  { "id": "biblia_livre", "version": "Biblia Livre", "state": "Active" },
  { "id": "elberfelder_1905", "version": "Elberfelder (1905)", "state": "Active" },
  { "id": "turkish", "version": "Turkish", "state": "Active" },
  { "id": "sagradas", "version": "Sagradas Escrituras", "state": "Active" },
  { "id": "terjemahan_baru_1994", "version": "Terjemahan Baru (1994)", "state": "Active" },
  { "id": "schlachter", "version": "Schlachter", "state": "Active" },
  { "id": "chinese_kjv_traditional_shangdi", "version": "Chinese KJV (Traditional) Shang-Di", "state": "Active" },
  { "id": "tagalog_ang_biblia_1905", "version": "Tagalog Ang Biblia (1905)", "state": "Active" },
  { "id": "bible_de_lepee_2005", "version": "La Bible de l'Épée (2005)", "state": "Active" },
  { "id": "indian_revised_version_2017_2018", "version": "Indian Revised Version (2017-2018)", "state": "Active" },
  { "id": "geneva_1587", "version": "Geneva Bible (1587)", "state": "Active" },
  { "id": "web", "version": "World English Bible", "state": "Active" },
  { "id": "asv_strongs", "version": "ASV with Strong's", "state": "Active" },
  { "id": "rv_1858", "version": "Reina-Valera 1858", "state": "Active" },
  { "id": "kannada", "version": "Kannada", "state": "Active" },
  { "id": "terjemahan_lama", "version": "Terjemahan Lama", "state": "Active" },
  { "id": "luther", "version": "Luther", "state": "Active" },
  { "id": "chinese_union_traditional_strongs", "version": "Chinese Union Version (Traditional, Strong's)", "state": "Active" },
  { "id": "coverdale_1535", "version": "Coverdale Bible (1535)", "state": "Active" },
  { "id": "almeida_ra", "version": "Tradução de João Ferreira de Almeida (Versão Revista e Atualizada)", "state": "Active" },
  { "id": "chinese_kjv_simplified_shangdi", "version": "Chinese KJV (Simplified) Shang-Di", "state": "Active" },
  { "id": "smith_van_dyke", "version": "Smith Van Dyke", "state": "Active" },
  { "id": "wlc", "version": "Westminster Leningrad Codex", "state": "Active" },
  { "id": "afrikaans_1953", "version": "Afrikaans 1953", "state": "Active" },
  { "id": "bishops_1568", "version": "Bishops Bible (1568)", "state": "Active" },
  { "id": "almeida_rc", "version": "Tradução de João Ferreira de Almeida Revista e Corrigida", "state": "Active" },
  { "id": "segond_1910", "version": "Louis Segond (1910)", "state": "Active" },
  { "id": "cornilescu", "version": "Cornilescu", "state": "Active" },
  { "id": "pol_ubg", "version": "Polish UBG", "state": "Active" },
  { "id": "net", "version": "NET", "state": "Active" }
]

export default function BibleVersionsPage() {
  return (
    <Section className="py-16">
      <Container>
        <Heading>Available Bible Versions</Heading>
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-mauve-300 dark:divide-mauve-700">
                <thead>
                  <tr>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-mauve-900 dark:text-white sm:pl-0">
                      Version
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-mauve-900 dark:text-white">
                      Availability
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-mauve-200 dark:divide-mauve-800">
                  {bibleVersions.map((bible) => (
                    <tr key={bible.id}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-mauve-900 dark:text-white sm:pl-0">
                        {bible.version}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-mauve-500 dark:text-mauve-400">
                        {bible.state === 'Active' ? (
                          <div className="flex items-center gap-2">
                            <CheckmarkIcon className="h-5 w-5 text-green-500" />
                            <span>Available</span>
                          </div>
                        ) : (
                          'Coming soon'
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <p className="mt-4 text-mauve-600 dark:text-mauve-400">...and many more coming soon.</p>
      </Container>
    </Section>
  )
}