import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import { CartPage, CheckoutPage, CollectionsPage, ContentPage, OrderPage, ProductPage } from "./components/Storefront";

function Router() {
  return <Switch>
    <Route path="/" component={Home} />
    <Route path="/colecoes" component={() => <CollectionsPage />} />
    <Route path="/colecoes/:slug">{(params) => <CollectionsPage slug={params.slug} />}</Route>
    <Route path="/produtos/:slug">{(params) => <ProductPage slug={params.slug} />}</Route>
    <Route path="/kits"><ContentPage type="kits" /></Route>
    <Route path="/presentes"><ContentPage type="presentes" /></Route>
    <Route path="/aromas"><ContentPage type="aromas" /></Route>
    <Route path="/sobre"><ContentPage type="sobre" /></Route>
    <Route path="/como-usar"><ContentPage type="como-usar" /></Route>
    <Route path="/faq"><ContentPage type="faq" /></Route>
    <Route path="/entregas"><ContentPage type="entregas" /></Route>
    <Route path="/trocas-e-devolucoes"><ContentPage type="trocas-e-devolucoes" /></Route>
    <Route path="/privacidade"><ContentPage type="privacidade" /></Route>
    <Route path="/termos-de-uso"><ContentPage type="termos-de-uso" /></Route>
    <Route path="/contato"><ContentPage type="contato" /></Route>
    <Route path="/carrinho" component={CartPage} />
    <Route path="/checkout" component={CheckoutPage} />
    <Route path="/pedido/:codigo">{(params) => <OrderPage code={params.codigo} />}</Route>
    <Route path="/rastrear"><OrderPage code="DEMO-AUREA-001" tracking /></Route>
    <Route path="/404" component={NotFound} />
    <Route component={NotFound} />
  </Switch>;
}

export default function App() {
  return <ErrorBoundary><ThemeProvider defaultTheme="light"><TooltipProvider><Router /></TooltipProvider></ThemeProvider></ErrorBoundary>;
}
