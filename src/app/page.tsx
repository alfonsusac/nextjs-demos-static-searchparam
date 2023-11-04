import Image from 'next/image'
import Link from 'next/link'
import { SearchParamBoundary } from './searchparamboundary'
import Input from './input'
import { Suspense } from 'react'
import ClientSideContent from './searchparam'

export default function Home(p: { params: any, searchParams: any }) {

  return (
    <main>
      <h1>
        Search Param in Static Routes
      </h1>

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
    </main>
  )
}

export const dynamic = "force-static"
