import Image from 'next/image'
import Link from 'next/link'
import { SearchParamBoundary } from './searchparamboundary'
import Input from './input'
import { SVGProps, Suspense } from 'react'
import ClientSideContent from './searchparam'

export default function Home(p: { params: any, searchParams: any }) {

  return (
    <main>
      <header>
        <h1>
          Search Param in Static Routes
        </h1>
        <pre>
          { `Route (app)                              ` }<u>{ `Size` }</u>{ `     ` }<u>{ `First Load JS` }</u>{`
  ○ /                                    8.12 kB        93.7 kB`}
        </pre>
      </header>


      <Link href="/">To Home</Link>
      <Link href="/?hello=world&title=test">To Hello World</Link>
      <Link href="/?foo=bar">To Foo Bar</Link>

      <div>
        <h2>
          Using searchParams props
        </h2>
        <p>
          <small>
            { 'Using searchParams props in a page will result of the route getting rendered dynamically at request time (o -> λ). However this can be forcefully ignored by exporting ' }
            <code>{ 'export const dynamic = "force-static"' }</code>. { "It doesn't matter if the props is wrapped with Suspense or not. Logically, the props are only rendered at build time which meant that the search params are going to be empty. Therefore, processing of search params are only possible in the client." }
          </small>
        </p>
        <p>
          Page parameter: <code>{ JSON.stringify(p) }</code><br />
        </p>
      </div>
      <div>
        <h2>
          Search Params with React Server Component
        </h2>
        <p>
          <small>This can be achieved by using conditionals to decide whether to render or not at the client. While keeping the react server component as their content.</small>
          <br />
        </p>
        <Suspense>
          <SearchParamBoundary spkey="hello" value="world">
            <div>
              <h2>Hello World</h2>
              <small>This is client search param but using RSC, only show if searchparams hello = world</small>
            </div>
          </SearchParamBoundary>
          <SearchParamBoundary spkey="foo" value="bar">
            <div>
              <h2>Foo Bar!</h2>
              <small>This is client search param but using RSC, only show if searchparams foo = bar</small>
            </div>
          </SearchParamBoundary>
          <SearchParamBoundary spkey="title" value="test">
            <div>
              <h2>Testing!</h2>
              <small>This is client search param but using RSC, only show if searchparams title = test</small>
            </div>
          </SearchParamBoundary>
        </Suspense>
      </div>
      <Suspense>
        Search <Input />
      </Suspense>
      <Suspense>
        <div>
          <h2>Client Component Inside Suspense</h2>
          <small>Offloading the rendering logic into the client. Has to be wrapped in { '<Suspense>' } so that it wont convert the entire page into Client-side ;-; </small>
          <ClientSideContent />
        </div>
      </Suspense>

      <h2>Resources</h2>
      <a href="https://nextjs.org/docs/app/api-reference/functions/use-search-params#static-rendering">
        <MingcuteExternalLinkLine />{' '}
        Next.js - Function: useSearchParams() #Static Rendering
      </a>
      <a href="https://nextjs.org/docs/messages/deopted-into-client-rendering">
        <MingcuteExternalLinkLine />{' '}
        Next.js - Entire page deopted into client-side rendering
      </a>

    </main>
  )
}

export const dynamic = "force-static"









function MingcuteExternalLinkLine(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" { ...props }><g fill="none"><path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z"></path><path fill="currentColor" d="M11 6a1 1 0 1 1 0 2H5v11h11v-6a1 1 0 1 1 2 0v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6Zm9-3a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0V6.414l-8.293 8.293a1 1 0 0 1-1.414-1.414L17.586 5H15a1 1 0 1 1 0-2Z"></path></g></svg>
  )
}