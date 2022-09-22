import Footer from '../../components/patterns/Footer';
import Link from '../../components/Link';
import { theme } from '../../theme/theme';
import { Box, Text } from '../../theme/components';

export default function FAQScreen({ faq }) {
  return (
    <Box
      styleSheet={{
        backgroundColor: theme.colors.neutral["050"]
      }}
    >
      <Box
        as="main"
        styleSheet={{
          flex: 1,
          maxWidth:theme.space.xcontainer_xl,
          marginHorizontal: "auto",
          paddingHorizontal: {
            xs: theme.space.x4,
            sm: theme.space.x6,
            lg: theme.space.x8,
          },
          paddingVertical:{
            xs: theme.space.x16,
            lg: theme.space.x20,
          },
        }}
      >
        <Box 
          styleSheet={{
            display: "grid",
            gridTemplateColumns: {
              lg: "repeat(3,minmax(0,1fr))",
            },
            gap: {
              lg: theme.space.x8,
            }
          }}
        >
          <Box>
            <Text
              as="h2"
              styleSheet={{
                textVariant:theme.typography.variants.heading2,
                color:theme.colors.neutral[900],
              }}
            >
              FAQ: Perguntas Frequentes
            </Text>
            <Text
              as="p"
              styleSheet={{
                marginTop: theme.space.x4,
                textVariant: theme.typography.variants.body1,
                color: theme.colors.neutral[500],
              }}
            >
              Não consegue encontrar a resposta que procura? entre em contato com nosso{' '}
              <Link
                href="mailto:contato@alura.com.br"
                styleSheet={{
                  color: theme.colors.primary[400],
                  hover: {
                    color: theme.colors.primary[300],
                  },
                }}
              >
                time de suporte ao consumidor
              </Link>
            </Text>

            <Text
              as="p"
              styleSheet={{
                marginTop: theme.space.x4,
                textVariant: theme.typography.variants.body1,
                color: theme.colors.neutral[500],
              }}
            >
              <Link
                href="/"
                styleSheet={{
                  color: theme.colors.primary[400],
                  fontWeight: '500',
                  hover: {
                    color: theme.colors.primary[300],
                  },
                }}
              >
                Voltar para home
              </Link>
            </Text>
          </Box>
          <Box
            styleSheet={{
              marginTop: {
                xs: theme.space.x12,
                lg: theme.space.x0,
              },
              gridColumn: {
                lg: "span 2 / span 2;",
              }
            }}
          >
            {faq.length === 0 && (
              <Box
                styleSheet={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  borderTop: {
                    xs: `${theme.space.xpx} solid ${theme.colors.neutral["200"]}`,
                    sm: 'none',
                  },
                  paddingTop: {
                    xs: theme.space.x6,
                    sm: 0,
                  },
                  borderLeft: {
                    sm: `${theme.space.xpx} solid ${theme.colors.neutral["200"]}`,
                  },
                  paddingLeft: {
                    sm: theme.space.x6,
                  },
                  textAlign: "center",
                  minHeight: theme.space['x1/1']
                }}
              >
                <Text
                  as="h1"
                  styleSheet={{
                    textVariant: theme.typography.variants.heading1,
                  }}
                >
                  Nada por aqui
                </Text>
                <Text
                  as="p"
                  styleSheet={{
                    marginTop: theme.space.x1,
                    textVariant: theme.typography.variants.body1,
                    color: theme.colors.neutral[500],
                  }}
                >
                  Talvez ainda não existam dúvidas frequentes.
                </Text>
              </Box>
            )}
            <Box as="dl">
              {faq.map((faq) => (
                <Box
                  key={faq.question}
                  styleSheet={{
                    marginBottom: theme.space.x12,
                  }}
                >
                  <Text
                    as="dt"
                    styleSheet={{
                      textVariant: theme.typography.variants.heading4,
                      color: theme.colors.neutral[900],
                    }}
                  >
                    {faq.question}
                  </Text>
                  <Text
                    as="dd"
                    styleSheet={{
                      marginTop: theme.space.x2,
                      textVariant: theme.typography.variants.body1,
                      color: theme.colors.neutral[500],
                    }}
                  >
                    {faq.answer}
                  </Text>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
      <Footer /> 
    </Box>
  )
}

FAQScreen.defaultProps = {
  faqs: [],
};