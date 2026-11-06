import { Badge } from '@roastbook/ui/badge'
import { Button } from '@roastbook/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@roastbook/ui/card'
import {
  Dialog,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@roastbook/ui/dialog'
import { Input } from '@roastbook/ui/input'
import { Label } from '@roastbook/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@roastbook/ui/tabs'
import { Textarea } from '@roastbook/ui/textarea'
import { useEffect, useState } from 'react'

const colours = [
  ['Page', 'bg-background'],
  ['Card', 'bg-card'],
  ['Primary', 'bg-primary'],
  ['Coffee', 'bg-coffee'],
  ['Secondary', 'bg-secondary'],
  ['Border', 'bg-border'],
] as const

export default function Showcase() {
  const [saved, setSaved] = useState(false)
  const [selectedTheme, setSelectedTheme] = useState('')
  useEffect(() => {
    const root = document.documentElement
    setSelectedTheme(
      root.classList.contains('dark') ? 'dark:roast' : 'light:roast',
    )
  }, [])
  function theme(mode: 'light' | 'dark', palette: string) {
    setSelectedTheme(`${mode}:${palette}`)
    const root = document.documentElement
    root.classList.toggle('dark', mode === 'dark')
    root.style.colorScheme = mode
    root.dataset.lightTheme = mode === 'light' ? palette : 'roast'
    root.dataset.darkTheme = mode === 'dark' ? palette : 'roast'
    try {
      localStorage.setItem('roastbook-ui-theme', mode)
    } catch {
      /* Theme works without storage. */
    }
  }
  return (
    <div className="space-y-12 md:space-y-16">
      <div className="max-w-3xl space-y-4">
        <h1 className="font-display text-3xl font-extrabold tracking-tight md:text-5xl">
          A shared design for a good cup.
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
          The components and themes behind Roastbook. Try the controls, switch
          palettes and explore a coffee journal built from the same pieces.
        </p>
      </div>
      <section
        id="foundations"
        aria-labelledby="foundations-title"
        className="space-y-5"
      >
        <h2 id="foundations-title" className="font-display text-2xl font-bold">
          Foundations
        </h2>
        <p className="max-w-2xl text-muted-foreground">
          Hanken Grotesk for reading, Bricolage Grotesque for headings. Warm
          paper, coffee ink and solid cards follow the journal's design.
        </p>
        <fieldset className="flex flex-wrap gap-2" aria-label="Theme previews">
          <Button
            variant={selectedTheme === 'light:roast' ? 'default' : 'outline'}
            aria-pressed={selectedTheme === 'light:roast'}
            onClick={() => {
              theme('light', 'roast')
            }}
          >
            Roast light
          </Button>
          <Button
            variant={selectedTheme === 'dark:roast' ? 'default' : 'outline'}
            aria-pressed={selectedTheme === 'dark:roast'}
            onClick={() => {
              theme('dark', 'roast')
            }}
          >
            Roast dark
          </Button>
          <Button
            variant={
              selectedTheme === 'light:classic-light' ? 'default' : 'outline'
            }
            aria-pressed={selectedTheme === 'light:classic-light'}
            onClick={() => {
              theme('light', 'classic-light')
            }}
          >
            Classic light
          </Button>
          <Button
            variant={
              selectedTheme === 'dark:classic-dark' ? 'default' : 'outline'
            }
            aria-pressed={selectedTheme === 'dark:classic-dark'}
            onClick={() => {
              theme('dark', 'classic-dark')
            }}
          >
            Classic dark
          </Button>
          <Button
            variant={
              selectedTheme === 'light:pure-light' ? 'default' : 'outline'
            }
            aria-pressed={selectedTheme === 'light:pure-light'}
            onClick={() => {
              theme('light', 'pure-light')
            }}
          >
            Pure light
          </Button>
          <Button
            variant={selectedTheme === 'dark:pure-dark' ? 'default' : 'outline'}
            aria-pressed={selectedTheme === 'dark:pure-dark'}
            onClick={() => {
              theme('dark', 'pure-dark')
            }}
          >
            Pure dark
          </Button>
        </fieldset>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {colours.map(([label, colour]) => (
            <div
              key={label}
              className="overflow-hidden rounded-2xl border bg-card"
            >
              <div className={`h-20 border-b ${colour}`} />
              <p className="px-4 py-3 text-sm font-semibold">{label}</p>
            </div>
          ))}
        </div>
      </section>
      <section
        id="components"
        aria-labelledby="components-title"
        className="space-y-5"
      >
        <h2 id="components-title" className="font-display text-2xl font-bold">
          Components
        </h2>
        <p className="max-w-2xl text-muted-foreground">
          These are the shared React components, rendered by Astro. Use Tab to
          inspect focus, and arrow keys to move between tabs.
        </p>
        <div className="grid gap-4 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Actions and states</CardTitle>
              <CardDescription>
                One primary action, with quieter supporting choices.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="flex flex-wrap gap-2">
                <Button>Save brew</Button>
                <Button variant="outline">Edit recipe</Button>
                <Button variant="secondary">Compare</Button>
                <Button variant="ghost">Cancel</Button>
                <Button variant="destructive">Delete</Button>
                <Button disabled>Saving…</Button>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge>On shelf</Badge>
                <Badge variant="secondary">Washed</Badge>
                <Badge variant="favorite">Favourite</Badge>
                <Badge variant="outline">18 g dose</Badge>
                <Badge variant="destructive">Unavailable</Badge>
              </div>
              <Dialog>
                <DialogTrigger render={<Button variant="outline" />}>
                  Open brew details
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Morning filter</DialogTitle>
                    <DialogDescription>
                      A sample record from the component showcase.
                    </DialogDescription>
                  </DialogHeader>
                  <DialogBody>
                    <p>
                      18 g coffee, 300 g water, brewed in 3 minutes. Sweet and
                      balanced, with a gentle citrus finish.
                    </p>
                  </DialogBody>
                  <DialogFooter>
                    <DialogClose render={<Button />}>Close details</DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Form controls</CardTitle>
              <CardDescription>
                Visible labels, helpful errors and disabled states.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="sample-name">Recipe name</Label>
                <Input id="sample-name" defaultValue="Morning filter" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="sample-dose">Coffee dose (g)</Label>
                <Input
                  id="sample-dose"
                  aria-invalid="true"
                  aria-describedby="dose-error"
                  defaultValue="0"
                />
                <p id="dose-error" className="text-sm text-destructive-text">
                  Enter a dose greater than zero.
                </p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="sample-sync">Sync status</Label>
                <Input
                  id="sample-sync"
                  disabled
                  value="Available after sign in"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      <section
        id="example"
        aria-labelledby="example-title"
        className="space-y-5"
      >
        <h2 id="example-title" className="font-display text-2xl font-bold">
          A coffee journal, in shared components
        </h2>
        <Card className="max-w-3xl">
          <CardHeader>
            <div className="flex flex-wrap items-center gap-3">
              <CardTitle as="h3">Morning filter</CardTitle>
              <Badge variant="favorite">Favourite</Badge>
            </div>
            <CardDescription>Ethiopia · Washed · Light roast</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="recipe">
              <TabsList aria-label="Coffee record">
                <TabsTrigger value="recipe">Recipe</TabsTrigger>
                <TabsTrigger value="notes">Tasting notes</TabsTrigger>
              </TabsList>
              <TabsContent value="recipe">
                <dl className="grid grid-cols-2 gap-4 py-5 sm:grid-cols-4">
                  {[
                    ['Coffee', '18 g'],
                    ['Water', '300 g'],
                    ['Temperature', '94 °C'],
                    ['Brew time', '3:00'],
                  ].map(([label, value]) => (
                    <div key={label}>
                      <dt className="text-sm text-muted-foreground">{label}</dt>
                      <dd className="font-display text-xl font-bold tabular-nums">
                        {value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </TabsContent>
              <TabsContent value="notes">
                <p className="py-5 leading-relaxed">
                  Sweet, bright and balanced. A little citrus as the cup cools,
                  with a smooth finish.
                </p>
              </TabsContent>
            </Tabs>
            <form
              className="mt-4 space-y-3 border-t pt-5"
              onSubmit={(event) => {
                event.preventDefault()
                setSaved(true)
              }}
            >
              <Label htmlFor="brew-note">Your tasting note</Label>
              <Textarea
                id="brew-note"
                placeholder="What do you notice in the cup?"
                onChange={() => {
                  setSaved(false)
                }}
              />
              <div className="flex flex-wrap items-center gap-4">
                <Button type="submit">Save sample note</Button>
                <p role="status" className="text-sm text-muted-foreground">
                  {saved
                    ? 'Sample saved for this preview. Nothing is sent or stored.'
                    : 'Try the form. This is a demonstration record.'}
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
