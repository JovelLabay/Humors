import React from "react";
import { View } from "react-native";

// NATIVE BASE
import { Skeleton, VStack, HStack, Center, Box } from "native-base";

// STYLES
import { colors } from "../../styles/Styles";

const GenerateCustomJoke = () => {
  return (
    <View>
      <Center w="100%">
        <VStack w="100%" space={8}>
          <Skeleton height={300} startColor="gray.300" />
          <Skeleton.Text px="4" startColor="gray.300" />
          <Skeleton.Text px="4" startColor="gray.300" />
          <Skeleton.Text px="4" startColor="gray.300" />
          <Box flexDirection="row">
            <Skeleton
              size="12"
              rounded="full"
              marginX="3"
              startColor="gray.300"
            />
            <Skeleton
              size="12"
              rounded="full"
              marginX="3"
              startColor="gray.300"
            />
          </Box>
        </VStack>
      </Center>
    </View>
  );
};

const LovedJoke = () => {
  return (
    <View>
      <HStack
        h={100}
        alignItems="center"
        paddingX={3}
        marginX={2}
        marginY={5}
        rounded="xl"
      >
        <Skeleton size="16" rounded="full" />
        <VStack paddingX={3} w="100%">
          <Skeleton h={4} w="80%" rounded="full" my={2} />
          <Skeleton h={4} w="80%" rounded="full" my={2} />
        </VStack>
      </HStack>
      <HStack
        h={100}
        alignItems="center"
        paddingX={3}
        marginX={2}
        marginY={5}
        rounded="xl"
      >
        <Skeleton size="16" rounded="full" />
        <VStack paddingX={3} w="100%">
          <Skeleton h={4} w="80%" rounded="full" my={2} />
          <Skeleton h={4} w="80%" rounded="full" my={2} />
        </VStack>
      </HStack>
    </View>
  );
};

export { GenerateCustomJoke, LovedJoke };
