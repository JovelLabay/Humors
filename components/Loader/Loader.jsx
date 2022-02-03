import React from "react";
import { View } from "react-native";

// NATIVE BASE
import { Skeleton, VStack, Center, Box } from "native-base";

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

export { GenerateCustomJoke };
